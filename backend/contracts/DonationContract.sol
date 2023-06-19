pragma solidity ^0.8.0;

contract DonationContract {
  struct Donation {
    uint256 amount;
    address donor;
    string name;
    uint256 timestamp;
  }

  Donation[] public donations;

  function donate(string memory name) public payable {
    require(msg.value > 0, "Donation amount should be greater than 0");
    donations.push(Donation({
      amount: msg.value,
      donor: msg.sender,
      name: name,
      timestamp: block.timestamp
    }));
  }

  function getDonations() public view returns (Donation[] memory) {
    return donations;
  }

  function totalDonations() public view returns (uint256) {
    uint256 total = 0;
    for (uint256 i = 0; i < donations.length; i++) {
      total += donations[i].amount;
    }
    return total;
  }
}
