require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraKey = process.env.BESU_RPC;

module.exports = {
  networks: {
    development: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, infuraKey),
      network_id: "*",
      gasPrice: 0
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
};
