const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed();
  // mint 1000 tokens for the deployer
  await tokenMock.mint(
    '0xA917694F3f033B53659d57C9dD1A32d368210B31',
    '1000000000000000000000'
  )
};
