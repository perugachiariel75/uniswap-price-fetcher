const { getWeb3, getContractInstance } = require('./blockchain');

async function getTokenPrice(symbol) {
  const web3 = getWeb3();
  const contract = getContractInstance(web3);

  // Example logic to get token price, adapt based on actual smart contract
  // For simplicity, let's assume we're directly querying a method that exists and returns the price
  const price = await contract.methods.getPrice(symbol).call();

  return web3.utils.fromWei(price, 'ether');
}

module.exports = { getTokenPrice };
