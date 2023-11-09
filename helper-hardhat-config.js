//0x694aa1769357215de4fac081bf1f309adc325306;
const networkConfig = {
  11155111: {
    name: "sepolia",
    ethUSDpriceFeed: "0x694aa1769357215de4fac081bf1f309adc325306",
  },
};

const devolopementChains = ["hardhat", "localhost"];

const DECIMALS = 8;
const INITIAL_ANSWER = 200000000;
module.exports = {
  networkConfig,
  devolopementChains,
  DECIMALS,
  INITIAL_ANSWER,
};
