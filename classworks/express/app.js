const express = require('express');
const crypto = require('crypto');
const app = express();
const jwt = require('jsonwebtoken');

const token = crypto.randomBytes(24).toString('base64');
function middleware(req, res, next) {
  console.log(req.headers);
  if (req.headers.chlp === apiKey) next();
  else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
const products = [
  {
    id: 1,
    category: 'Electronics',
    company: 'Apple',
    description: 'Iphone',
  },
  {
    id: 2,
    category: 'Electronics',
    company: 'Samsung',
    description: 'Galaxy',
  },
];

const users = [
  {
    name: 'Bob Smith',
    email: 'bob@example.com',
    password: '123456',
  },
];

function authentication(req, res, next) {
  const credentials = req.headers.authorization.split(' ')[1];

  if (!credentials) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Authorization Required"');
    res.status(401).send('Invalid Credenials');
    return;
  }
  const data = Buffer.from(credentials, 'base64').toString();
  const [name, password] = data.split(':');
  let flag = false;
  users.forEach((user) => {
    if (user.name === name && user.password === password) {
      req.user = { name, password, email: user.email };
      flag = true;
      next();
    }
  });
  if (!flag) res.status(401).send('Invalid credentials');
}

function tokenAuthentication(req, res, next) {
  console.log('auth', req.headers.authorization);
  const token = req.headers.authorization.split(' ')[1];

  console.log('token', token);

  const payload = jwt.verify(token, 'some_secret');
  console.log('payload', payload);
  next();
}
app.get('/products', middleware, (req, res) => {
  res.json(products);
});

app.get('/login', authentication, (req, res) => {
  const user = req.user;
  const token = jwt.sign(user, 'some_secret', {
    expiresIn: '20s',
  });
  res.send(token);
});

app.get('/orders', tokenAuthentication, (req, res) => {
  res.send('<h1> Hello dear user </h1>');
});
app.listen(3001, () => {
  console.log('Server is runing on port: 3001');
});
