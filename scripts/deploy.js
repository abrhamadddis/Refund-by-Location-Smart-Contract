const hre = require("hardhat");

async function main() {
  const RefundByLocation = await hre.ethers.getContractFactory("RefundByLocation");
  const refundByLocation = await RefundByLocation.deploy();

  await refundByLocation.deployed();

  console.log("RefundByLocation deployed to:", refundByLocation.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode =  1;
});