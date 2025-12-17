const { PORT } = require('./configs.js');
const http = require('node:http');
const parser = require('./utils/parsURL.js');
const userRoutes = require('./router/users.js');

const server = http.createServer((req, res) => {
  const path = parser(req.url);
  req.path = path;
  if (path.pathName === 'users') {
    userRoutes(req, res);
    return;
  }
  res.setHeader('content-type', 'application/json');
  res.writeHead(200, 'Ok');
  res.end(JSON.stringify({ message: '/root directory' }));
});

server.listen(PORT, () => {
  console.log(`Server runing on port: ${PORT}`);
});
