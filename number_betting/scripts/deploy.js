async function main() {
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy(); // Attempt to deploy the contract

  // Manually send the deployment transaction and catch any errors
  try {
    const tx = await counter.deployTransaction.send();
    await tx.wait();
  } catch (error) {
    console.error("Failed to deploy the contract:", error);
    throw error;
  }

  console.log(`Counter deployed to: ${counter.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode =   1;
});