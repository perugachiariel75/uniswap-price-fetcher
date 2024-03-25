require('dotenv').config();
const Web3 = require('web3');
const { ChainId, Fetcher, WETH, Token } = require('@pancakeswap-libs/sdk');

const chainId = ChainId.MAINNET;
const web3 = new Web3(process.env.BSC_NODE_URL);

function getWeb3() {
  return web3;
}

function getContractInstance(web3) {
  // Placeholder for contract instance creation
  // You would typically use web3 to create and return a contract instance here
  // Example (pseudo-code): return new web3.eth.Contract(abi, contractAddress);
  return {}; // Implement according to your contract
}

module.exports = { getWeb3, getContractInstance };
