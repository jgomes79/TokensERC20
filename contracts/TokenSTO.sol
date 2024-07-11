// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import { IWhitelist } from "./IWhitelist.sol";

contract TokenSTO is ERC20 {
    uint256 public supply = 1_000_000_000;
    address public whitelist;

    constructor(address _whitelist) ERC20("MySTOToken", "TOKEN") {
        whitelist = _whitelist;
        _mint(msg.sender, supply * 10 ** decimals());
    }

    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        require(IWhitelist(whitelist).isWhitelisted(recipient), "NotInWhitelist");

        return super.transfer(recipient, amount);
    }

    function transferFrom(address from, address to, uint256 value) public virtual override returns (bool) {
        require(IWhitelist(whitelist).isWhitelisted(to), "NotInWhitelist");
        
        return super.transferFrom(from, to, value);
    }
}
