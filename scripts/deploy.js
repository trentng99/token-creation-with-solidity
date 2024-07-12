const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = await ethers.provider.getBalance(deployer.address);

  console.log("Account balance:", ethers.formatEther(weiAmount));

  const Token = await ethers.getContractFactory("RabbitoPan");
  const token = await Token.deploy();

  await token.waitForDeployment();

  console.log("Token address:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
