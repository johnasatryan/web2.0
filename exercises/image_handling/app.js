const express = require('express');
const app = express();
const path = require('node:path');
const multer = require('multer');
const fs = require('node:fs');

// app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const registerHTML = path.join(__dirname, 'public', 'index.html');
const image = path.join(__dirname, 'uploads', 'download.png');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     if (!fs.existsSync(path.join(__dirname, 'uploads'))) {
//       fs.mkdirSync(path.join(__dirname, 'uploads'));
//     }
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     // Use the original file name
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage });
app.use(express.json({ limit: '10mb' }));

app.get('/register', (req, res) => {
  res.sendFile(registerHTML);
});

// app.post('/register', upload.single('avatar'), (req, res) => {
//   console.log(req.file);
//   res.status(201).json({ message: 'User created successfully' });
// });

app.post('/register', (req, res) => {
  const dataBase64 = req.body.base64URL.split(',')[1];
  console.log(dataBase64);
  const buffer = Buffer.from(dataBase64, 'base64');

  fs.writeFileSync(path.join(__dirname, 'uploads', req.body.filename), buffer);
  res.status(201).json({ message: 'User created successfully' });
});

app.get('/uploads/download.png', (req, res) => {
  console.log(image);
  res.sendFile(image);
});

app.listen(3001, () => {
  console.log('Server is runing on port:3001');
});
