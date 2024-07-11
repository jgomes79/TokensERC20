// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import './IWhitelist.sol';
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract Whitelist is IWhitelist, Ownable {

    mapping(address => bool) private _whitelist;

    constructor() Ownable(msg.sender) {
    }

    function addToWhitelist(address account) external override onlyOwner {
        _whitelist[account] = true;
    }

    function removeFromWhitelist(address account) external override onlyOwner {
        _whitelist[account] = false;
    }

    function isWhitelisted(address account) external view override returns (bool) {
        return _whitelist[account];
    }
}
