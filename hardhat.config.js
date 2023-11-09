require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const rpc_url = process.env.RPC_URL;
const private_key = process.env.PRIVATE_KEY;
const api_key = process.env.ETHERSCAN_APIKEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  //solidity: "0.8.8",
  solidity: {
    compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
  },
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: rpc_url,
      accounts: [private_key],
      chainId: 11155111,
      blockConfirmations: 6,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: api_key,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    user: {
      default: 1,
    },
  },
};
