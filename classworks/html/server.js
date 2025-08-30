const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/users', (req, res) => {
  console.log(req.body);
});
app.listen(3001, () => {
  console.log('server is runing');
});
