// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    uint256 public supply = 1_000_000_000;

    constructor() ERC20("MyToken", "TOKEN") {  
        _mint(msg.sender, supply * 10 ** decimals());
    }
}
