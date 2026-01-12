const express = require('express');
const app = express();
const path = require('node:path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../', 'public')));

// const registerHTML = path.join(__dirname, 'public', 'index.html');
// const registerCSS = path.join(__dirname, 'public', 'style.css');

// app.get('/', (req, res) => {
//   res.sendFile(registerHTML);
// });

// app.get('/style.css', (req, res) => {
//   res.sendFile(registerCSS);
// });

function parser(req, res, next) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    req.body = body.toString();
    next();
  });
}
app.post('/users', (req, res) => {
  console.log(req.body);
  res.send('esiminch');
});
app.listen(3001, () => {
  console.log('Server is runing on port:3001');
});
