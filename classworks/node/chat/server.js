require('dotenv').config();

const { debug } = require('node:console');
const net = require('node:net');
const PORT = process.env.PORT;
const clients = new Set();

const broadcast = (client, message) => {
  for (const c of clients) {
    if (c !== client) {
      c.write(message);
    }
  }
};

const server = net.createServer((socket) => {
  socket.name = `User${Math.floor(Math.random() * 1000)}`;
  clients.add(socket);
  broadcast(socket, `${socket.name} added to chat. Say hello...`);

  socket.on('data', (data) => {
    broadcast(socket, data.toString());
  });

  socket.on('end', () => {
    broadcast(socket, 'helav chatic');
  });
});

// console.log(process.env.PORT);
server.listen(PORT, () => {
  console.log(`Server is runing on port: ${PORT}`);
});
