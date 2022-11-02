const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api' // development api
    : 'http://localhost:3000/api'; // production api

const ganache =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:7545' // development api
    : 'http://localhost:7545'; // production api

export { apiUrl, ganache };
