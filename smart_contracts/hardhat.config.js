require("@nomicfoundation/hardhat-toolbox");

// https://eth-sepolia.g.alchemy.com/v2/lKZ03UXvEyr2jBQCCrcLsF1jbFwxq2u5


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
      accounts: ['ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'],
    },
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/lKZ03UXvEyr2jBQCCrcLsF1jbFwxq2u5',
      accounts: ['b7f9a25e7099cbc69ab5822f398700ceedf94768f59f7cdadd85c0b7ab572516'],
    },

    
  },
};
