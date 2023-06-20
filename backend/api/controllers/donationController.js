const Web3 = require('web3');
require('dotenv').config();

const web3 = new Web3(process.env.BESU_RPC); // Update this line
const contractABI = require('../../build/contracts/Donations.json').abi; // Adjust the path as needed
const contractAddress = process.env.CONTRACT_ADDRESS; // Replace with actual contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);

exports.addDonation = async (req, res) => {
  const { name, quantity, id } = req.body;
  
  try {
    const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;
  
    const donation = await contract.methods.donate(name, quantity).send({ from: account.address });
    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while making the donation' });
  }
};
