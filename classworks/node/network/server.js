const net = require('node:net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(`Server received: ${data.toString()}`);
  });

  socket.write('hazar hello');

  socket.on('close', () => {
    console.log('Connection closed');
  });
});

server.listen(3001, () => {
  console.log('Server is running');
});
