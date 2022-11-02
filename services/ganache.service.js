import { provider } from 'ganache';

const options = {
  database: { dbPath: './ganache/db' },
  server: { host: '127.0.0.1', port: 8545 },
};

const getProvider = () => {
  return provider(options);
};

export { getProvider };
