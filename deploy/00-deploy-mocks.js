const {
  devolopementChains,
  DECIMALS,
  INITIAL_ANSWER,
} = require("../helper-hardhat-config");
const { network } = require("hardhat");

async function deployFunc(hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainID = network.config.chainId;
  if (chainID === 31337) {
    log("deploying mocks");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_ANSWER],
    });
    log("mocks deployed");
    log("==============================");
  }
}

module.exports = deployFunc;
module.exports.tags = ["all", "mocks"];
