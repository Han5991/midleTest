const ganache = require('ganache');

const port = 7545;
const options = { server: { host: '192.168.1.104', port } };
const server = ganache.server(options);

server.listen(port, async err => {
  if (err) throw err;

  console.log(`ganache listening on port ${port}...`);
  const provider = server.provider;
  const accounts = await provider.request({
    method: 'eth_accounts',
    params: [],
  });
  console.log(accounts);
});
