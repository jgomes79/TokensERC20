const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TokenScamModule", (m) => {
  // Deploy the ERC20
  const TokenScam = m.contract("TokenScam");

  return { TokenScam };
});
