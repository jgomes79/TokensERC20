const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TokenMintBurnModule", (m) => {
  // Deploy the ERC20
  const TokenMintBurn = m.contract("TokenMintBurn");

  return { TokenMintBurn };
});
