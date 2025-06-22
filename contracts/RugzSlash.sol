// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
contract Slash {
    struct Report {
        address reporter;
        address suspect;
        string reason;
        uint256 timestamp;
    }

    Report[] public reports;

    event SlashingReported(address indexed reporter, address indexed suspect, string reason, uint256 time);

    function reportRug(address suspect, string memory reason) external {
        require(suspect != address(0), "Invalid suspect address");
        require(bytes(reason).length > 5, "Reason too short");

        reports.push(Report({
            reporter: msg.sender,
            suspect: suspect,
            reason: reason,
            timestamp: block.timestamp
        }));

        emit SlashingReported(msg.sender, suspect, reason, block.timestamp);
    }

    function getReportsCount() public view returns (uint256) {
        return reports.length;
    }

    function getReport(uint256 index) public view returns (Report memory) {
        require(index < reports.length, "Invalid index");
        return reports[index];
    }
}