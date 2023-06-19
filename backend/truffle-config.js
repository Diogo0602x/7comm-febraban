require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, process.env.RPC),
      network_id: '*',
    },
  },
  compilers: {
    solc: {
      version: '0.8.0',
    },
  },
};
