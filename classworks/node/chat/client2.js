require('dotenv').config();
const net = require('node:net');
const PORT = process.env.PORT;
const readline = require('node:readline');

const client = net.connect(PORT, () => {
  console.log('Connected to the server');
});

const rd = readline.createInterface({ input: process.stdin });

client.on('data', (data) => {
  console.log(data.toString());
});

rd.on('line', (data) => {
  client.write(data);
});
