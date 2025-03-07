pragma solidity ^0.8.0;

contract RWACompliance {
    address public tokenAuthority;
    mapping(address => bool) public whitelistedUsers;

    event TradeExecuted(address indexed user, uint256 amount);

    constructor(address _tokenAuthority) {
        tokenAuthority = _tokenAuthority;
    }

    modifier onlyWhitelisted(address user) {
        require(whitelistedUsers[user], "User is not whitelisted.");
        _;
    }
    function updateWhitelist(address user, bool isWhitelisted) external {
        require(msg.sender == tokenAuthority, "Only token authority can update.");
        whitelistedUsers[user] = isWhitelisted;
    }

    function executeTrade(uint256 amount) external onlyWhitelisted(msg.sender) {
        emit TradeExecuted(msg.sender, amount);
    }
}
