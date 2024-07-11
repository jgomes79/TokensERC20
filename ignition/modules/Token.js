const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TokenModule", (m) => {
  // Deploy the ERC20
  const Token = m.contract("Token");

  return { Token };
});
