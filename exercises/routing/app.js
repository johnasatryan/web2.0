require('dotenv').config({ quiet: true });

const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/user.routes');

const app = express();
const PORT = process.env.PORT;
app.use(
  cors({
    origin: '*',
    methods: 'POST',
  }),
);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.json({
    message: 'Home route',
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
