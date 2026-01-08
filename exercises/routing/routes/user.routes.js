const express = require('express');

const router = express.Router();

router.get('/posts', (req, res) => {
  res.status(200).json({ name: 'James' });
});

router.get('/posts/', (req, res) => {
  res.status(200).json({ name: 'Bob' });
});

module.exports = router;
