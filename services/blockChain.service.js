import Web3 from 'web3';
import { ganache } from '../config';
// import { getProvider } from './ganache.service';
import { providers } from 'ethers';

const getWeb3 = () => {
  return new Web3(new Web3.providers.HttpProvider(ganache));
};

const getContractInstance = (abiobj, address) => {
  const web3 = getWeb3();
  return new web3.eth.Contract(abiobj, address);
};

const getEthers = () => {
  return getWeb3().bzz;
};

const getAccounts = async () => {
  try {
    return await getWeb3().eth.getAccounts();
  } catch (e) {
    console.error(e);
  }
};

const getBlock = async address => {
  try {
    return await getWeb3().eth.getBlock(address);
  } catch (e) {
    console.error(e);
    return e;
  }
};

const setMsg2 = async (contractInstance, value, account) => {
  try {
    return await contractInstance.methods
      .setMsg2(value)
      .send({ from: account });
  } catch (e) {
    console.error(e);
  }
};

const getBlockNumber = async () => {
  return await getWeb3().eth.getBlockNumber();
};

module.exports = {
  getContractInstance,
  getAccounts,
  getBlock,
  setMsg2,
  getEthers,
  getBlockNumber,
  getWeb3,
};
