const DonationContract = artifacts.require('DonationContract');

contract('DonationContract', (accounts) => {
  let contract;
  before(async () => {
    contract = await DonationContract.deployed();
  });

  it('should donate', async () => {
    await contract.donate('John Doe', { from: accounts[0], value: web3.utils.toWei('1', 'ether') });
    const totalDonations = await contract.totalDonations();
    assert(totalDonations.toNumber() === web3.utils.toWei('1', 'ether'));
  });

  it('should get donation count', async () => {
    const count = await contract.getDonationCount();
    assert(count.toNumber() === 1);
  });
});
