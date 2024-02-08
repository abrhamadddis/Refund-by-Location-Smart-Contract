require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config

const {INFURA_AIP_KEY, PRIVATE_KEY} = process.env
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "sepolia",
  networks:{
    hardhat:{},
    sepolia:{
      url:`https://sepolia.infura.io/v3/${INFURA_AIP_KEY}`,
      accounts:[PRIVATE_KEY],
      chainId: 1115511,
    },
  }
};
