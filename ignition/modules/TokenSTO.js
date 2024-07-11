const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TokenSTOModule", (m) => {
  const Whitelist = m.contract("Whitelist");
  const TokenSTO = m.contract("TokenSTO", [Whitelist]);

  return { Whitelist, TokenSTO };
});
