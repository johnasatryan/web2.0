const { readData, writeData } = require('../utils/dataResolve');

const routes = (req, res) => {
  if (req.method === 'GET' && !req.path.resourceID) {
    const result = readData(req.path.pathName);
    res.setHeader('content-type', 'application/json');
    res.writeHead(200, 'Ok');
    res.end(JSON.stringify({ result }));
    return;
  } else if (req.method === 'POST') {
    req.on('data', (data) => {
      writeData(req.path.pathName, data);
      res.setHeader('content-type', 'application/json');
      res.writeHead(201);
      res.end(JSON.stringify({ message: 'User created successfully' }));
      return;
    });
  }
};

module.exports = routes;
