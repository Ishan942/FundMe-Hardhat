const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const fundMe = await ethers.getContract("FundMe", deployer);
  console.log("Funding Contract..");
  const transactionResponse = await fundMe.fund({
    value: ethers.parseEther("100.0"),
  });
  await transactionResponse.wait(1);
  console.log("Funded Successfully");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
