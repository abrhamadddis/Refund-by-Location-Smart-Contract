const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const RefundByLocation = await ethers.getContractFactory("RefundByLocation");
  let contract;
  try {
    contract = await RefundByLocation.deploy();
    await contract.deployTransaction.wait();
  } catch (error) {
    console.error("Deployment failed:", error);
    throw error;
  }

  console.log("Contract address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  