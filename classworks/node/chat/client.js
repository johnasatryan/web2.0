require('dotenv').config();
const net = require('node:net');
const PORT = process.env.PORT;
const readline = require('node:readline');

const rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rd.setPrompt('> ');

const client = net.connect(PORT, () => {
  console.log('Connected to the server');
  rd.prompt();
});

client.on('data', (data) => {
  rd.prompt();

  console.log(data.toString());
});

rd.on('line', (data) => {
  rd.prompt();

  client.write(data);
});
