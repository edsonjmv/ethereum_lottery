const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'high narrow popular feel hole napkin asset cream nerve blast wire wisdom',
	'https://rinkeby.infura.io/v3/2b01ddc4f54f4faf852d4647f85671e7'
);
const web3 = new Web3(provider);