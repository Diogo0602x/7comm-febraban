const { Web3 } = require('web3');
require('dotenv').config();

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

    var transfer = contract.methods.donate(name, quantity);
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

    res.status(201);
    res.send();
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while making the donation' });
  }
};

exports.getDonation = async(req, res) => {

  try {

    await contract.methods.getDonation(req.query.n).call();

    res.status(201);
    res.send();

  } catch (error) {
    res.status(500).json({ error: 'An error occurred while getting the donation' });
  }

};
