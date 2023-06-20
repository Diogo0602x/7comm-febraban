require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, process.env.BESU_RPC),
      network_id: "*",
      gasPrice: 0
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
       optimizer: {
         enabled: false,
         runs: 200
       },
      }
    },
  },
};
