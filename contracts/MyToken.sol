// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    string private _tokenDescription;
    string private _tokenImage;

    constructor(
        string memory tokenName, 
        string memory tokenSymbol, 
        string memory tokenDescription, 
        string memory tokenImage, 
        uint256 initialSupply
    ) ERC20(tokenName, tokenSymbol) Ownable() {
        _tokenDescription = tokenDescription;
        _tokenImage = tokenImage;
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function description() public view returns (string memory) {
        return _tokenDescription;
    }

    function image() public view returns (string memory) {
        return _tokenImage;
    }
}
