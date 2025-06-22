const hre = require("hardhat");

async function main() {
  const Slash = await hre.ethers.getContractFactory("Slash"); // Replace with your exact contract name if different
  const slash = await Slash.deploy(); // deploy the contract

  await slash.waitForDeployment(); // ✅ for newer Hardhat + ethers versions

  console.log("Slash deployed to:", await slash.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});