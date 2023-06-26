pragma solidity 0.8.0;

contract Donations {
  struct Donation {
    uint id;
    string donorName;
    uint amount;
  }

  event DonationAdded(
    uint id,
    string donorName,
    bytes32 indexed donorNameHash,
    uint indexed amount,
    uint indexed blockTimestamp
  );

  Donation[] public donations;

  function donate(string memory _donorName, uint _amount) public {
    donations.push(Donation(donations.length, _donorName, _amount));
    emit DonationAdded(donations.length, _donorName, keccak256(abi.encode(_donorName)), _amount, block.timestamp);
  }

  function getDonation(uint _id) public view returns(uint, string memory, uint) {
    Donation memory donation = donations[_id];
    return (donation.id, donation.donorName, donation.amount);
  }

  function getDonationCount() public view returns (uint) {
    return donations.length;
  }
}
