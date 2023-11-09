const {
  networkConfig,
  devolopementChains,
} = require("../helper-hardhat-config");
const { network } = require("hardhat");
const { verify } = require("../utils/verify");

async function deployFunc(hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainID = network.config.chainId;

  let ethUSDpriceFeed;
  if (devolopementChains.includes(network.name)) {
    const ethusdAgg = await deployments.get("MockV3Aggregator");
    ethUSDpriceFeed = ethusdAgg.address;
  } else {
    ethUSDpriceFeed = networkConfig[chainID]["ethUSDpriceFeed"];
  }
  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [ethUSDpriceFeed], //price feed address
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  if (
    !devolopementChains.includes(network.name) &&
    process.env.ETHERSCAN_APIKEY
  ) {
    await verify(fundMe.address, [ethUSDpriceFeed]);
  }
  log("=============================");
}

module.exports = deployFunc;

module.exports.tags = ["all", "fundMe"];
