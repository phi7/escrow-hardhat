// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  // We get the contract to deploy.
  const Escrow = await hre.ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy(
    "0x9c6a0d7629bFfE8a72AC9C419E44e67Ba53Da672",
    "0x46a3E79436a2AFF9c1b0564d4D62218F9d98a395"
  );

  await escrow.deployed();

  console.log("deployed to:", escrow.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
