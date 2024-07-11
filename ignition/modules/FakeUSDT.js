const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("FakeUSDTModule", (m) => {
  // Deploy the ERC20
  const FakeUSDT = m.contract("FakeUSDT");

  return { FakeUSDT };
});
