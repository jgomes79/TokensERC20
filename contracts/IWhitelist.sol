// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IWhitelist {

    function addToWhitelist(address account) external;

    function removeFromWhitelist(address account) external;

    function isWhitelisted(address account) external view returns (bool);
}