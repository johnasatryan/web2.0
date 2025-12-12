const http = require('node:http');
const url = require('url');
const users = [
  {
    name: 'James',
    age: 23,
  },
  {
    name: 'Bob',
    age: 57,
  },
];
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const path = url.parse(req.url).path;
    if (path === '/users') {
      res.write(JSON.stringify(users));
      res.end(() => {});
    }
  }
});

server.listen(3001, () => {
  console.log('server runing...');
});
