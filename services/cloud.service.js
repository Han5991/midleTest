import {
  getWeb3,
  getAccounts,
  getContractInstance,
} from './blockChain.service';
import { nameregistry } from './reg.service';
import abiList from './abiList';

const cloud = async () => {
  const { cloud } = abiList;
  const { abi, address } = cloud;
  const contractInstance = await getContractInstance(abi, address);
  return contractInstance.methods;
};

const setattribute = async (name, attr, id) => {
  const accounts = await getAccounts();
  const methods = await nameregistry();
  return await methods[id](name, attr).send({
    from: accounts[0],
  });
};

async function setAddr(name, address) {}

const checkGoalReached = async id => {
  const accounts = await getAccounts();
  const methods = await cloud();
  return await methods[id].send({
    from: accounts[0],
  });
};

const setoneval = async (name, id) => {
  const accounts = await getAccounts();
  const methods = await nameregistry();
  return await methods[id](name).send({
    from: accounts[0],
  });
};

async function oneargfunc(name, id) {
  const methods = await nameregistry();
  return await methods[id](name).call();
}

async function showvalues(id) {
  const methods = await nameregistry();
  return await methods[id]().call();
}

module.exports = {
  setoneval,
  oneargfunc,
  showvalues,
  setattribute,
  checkGoalReached,
};
