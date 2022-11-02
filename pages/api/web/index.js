import {
  getContractInstance,
  getAccounts,
  getBlock,
  setMsg2,
  getEthers,
  getBlockNumber,
} from 'services';

const test = async (req, res) => {
  const abiobj = [
    {
      constant: false,
      inputs: [
        {
          name: '_msg2',
          type: 'string',
        },
      ],
      name: 'setMsg2',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'counter',
      outputs: [
        {
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getMsg2',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'setCounter',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'msg1',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          name: '_msg1',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
  ];

  const accounts = await getAccounts();
  const blockNumber = await getBlockNumber();
  getEthers();
  // const blockInfo = await Promise.all(
  //   blockNumber.map(async account => await getBlock(account)),
  // );
  // console.log(blockInfo);
  const address = '0xea8CfBf5Bd2BA082312A3Fc69fDa5683B40782c6';
  const contractInstance = getContractInstance(abiobj, address);

  await contractInstance.methods.setCounter().send({ from: accounts[0] });

  const count = await contractInstance.methods.counter().call();

  await contractInstance.methods.setMsg2('value').send({ from: accounts[0] });

  const msg = await contractInstance.methods.getMsg2().call();

  return res.status(200).json({ count, msg });
};

export default test;
