const Web3 = require('web3');
require('dotenv').config();
const server = require("../../server");

const web3 = new Web3(process.env.BESU_RPC); // Update this line
const contractABI = require('../../build/contracts/Donations.json').abi; // Adjust the path as needed
const contractAddress = process.env.CONTRACT_ADDRESS; // Replace with actual contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);

exports.addDonation = async (req, res) => {
  const { name, quantity } = req.body;
  
  try {
    const account = web3.eth.accounts.privateKeyToAccount("0x" + process.env.PRIVATE_KEY);
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;

    var transfer = contract.methods.donate(name, parseInt(quantity*100)); // solidity não tem float, anda-se 2 casas para a esquerda
    var encodedABI = transfer.encodeABI();

    var tx = {
      from: account.address,
      to: contractAddress,
      gas: 6000000,
      gasPrice: 20000000000,
      data: encodedABI
    }; 
    
    const signed = await web3.eth.accounts.signTransaction(tx, "0x" + process.env.PRIVATE_KEY);
    const donation = await web3.eth.sendSignedTransaction(signed.rawTransaction);
    res.status(201).json(donation.transactionHash);
    res.send();
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while making the donation' });
  }
};

exports.getDonation = async(req, res) => {

  try {
    
    var blocknumber = Number(await web3.eth.getBlockNumber());
  
    var from = 194190;
    var n = 1000;
    var resulttotal = []
      
    while( from <= blocknumber ) {
      var to = from + n > blocknumber ? blocknumber : from + n ;
      var result = await contract.getPastEvents('DonationAdded', {
        //filter: { donorNameHash: web3.utils.sha3(web3.eth.abi.encodeParameter("string", req.query.name))},
        fromBlock: from,
        toBlock: to
      });
      from += n;
      for(var i = 0; i < result.length; i++){
        resulttotal.push({
          id: Number(result[i].returnValues.id),
          name: result[i].returnValues.donorName, 
          amount: Number(parseFloat(result[i].returnValues.amount)/100).toFixed(2),
          timestamp: Number(result[i].returnValues.blockTimestamp),
          transactionId: result[i].transactionHash })
      }
    }
    
    var resultfinal = resulttotal.filter(obj => obj.name.indexOf(req.query.name) > -1);
    res.status(201).json(resultfinal);
    res.send();

  } catch (error) {
    res.status(500).json({ error: 'An error occurred while getting the donation' });
  }

};

exports.getDonationCount = async(req, res) => {

  try {

    const result = Number(await contract.methods.getDonationCount().call());
    res.status(201).json(result);
    res.send();

  } catch (error) {
    res.status(500).json({ error: 'An error occurred while getting the amount of donations' });
  }

};

exports.getAllDonations = async(req, res) => {

  try {
    
    var blocknumber = Number(await web3.eth.getBlockNumber());
  
    var from = 194190;
    var n = 1000;
    var resultfinal = []
      
    while( from <= blocknumber ) {
      var to = from + n > blocknumber ? blocknumber : from + n ;
      var result = await contract.getPastEvents('DonationAdded', {
        fromBlock: from,
        toBlock: to
      });
      from += n;
      for(var i = 0; i < result.length; i++){
        resultfinal.push({
          id: Number(result[i].returnValues.id),
          name: result[i].returnValues.donorName,
          amount: Number(parseFloat(result[i].returnValues.amount)/100).toFixed(2),
          timestamp: Number(result[i].returnValues.blockTimestamp),
          transactionId: result[i].transactionHash })
      }
    }

    res.status(201).json(resultfinal);
    res.send();

  } catch (error) {
    res.status(500).json({ error: 'An error occurred while getting all the donations' });
  }

};
