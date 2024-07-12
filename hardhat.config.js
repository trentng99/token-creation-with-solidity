const { default: config } = require("./config");

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/yeJqW2kXNaAYzRTWDPOAWBHW_wfQ7zEh",
      accounts: [
        `5e205ccd871472369f85ac2742c1764d512ede195676b66f4c06a42d5780138f`,
      ],
      gasPrice: 20000000000, // 20 gwei
      gasMultiplier: 1.2,
    },
  },
};
