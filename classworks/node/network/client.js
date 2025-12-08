const net = require('node:net');

const client = net.connect('3001', () => {
  client.write('hello world');
});

client.on('data', (data) => {
  console.log(`Client received: ${data.toString()}`);
});
client.on('close', () => {
  console.log('client closed');
});
