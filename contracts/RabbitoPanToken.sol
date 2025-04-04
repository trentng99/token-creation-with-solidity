// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";  // OpenZeppelin package contains implementation of the ERC 20 standard, which our NFT smart contract will inherit

contract RabbitoPan is ERC20 {
    uint constant _initial_supply = 1 * (10**18);  // 1000 tokens
    /* ERC 20 constructor takes in 2 strings, feel free to change the first string to the name of your token name, and the second string to the corresponding symbol for your custom token name */
    constructor() ERC20("RabbitoPan", "RBTP") public {
        _mint(msg.sender, _initial_supply);
    }
}