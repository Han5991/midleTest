import {
  getWeb3,
  getAccounts,
  getContractInstance,
} from './blockChain.service';
import abiList from './abiList';

const nameregistry = async () => {
  const { nameregistry } = abiList;
  const { abi, address } = nameregistry;
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
  nameregistry,
};
