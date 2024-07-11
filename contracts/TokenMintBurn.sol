// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract TokenMintBurn is ERC20, Ownable {
    uint256 public supply = 1_000_000_000;

    constructor() ERC20("MyMintBurnToken", "TOKEN") Ownable(msg.sender) {  
        _mint(msg.sender, supply * 10 ** decimals());
    }

    function mint(uint256 _supply) external onlyOwner {
        _mint(msg.sender, _supply * 10 ** decimals());
    }

    function burn(uint256 _amount) external {
        _burn(msg.sender, _amount);
    }
}
