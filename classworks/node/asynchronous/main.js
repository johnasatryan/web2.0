const crypto = require('node:crypto');

const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 10;
const MAX_SIZE = 100;
// crypto.pbkdf2Sync('password', 'salt', 100000, 100, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 100, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 100, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 100, 'sha512');

// for (let i = 0; i < MAX_SIZE; ++i) {
//   crypto.pbkdf2('password', 'salt', 100000, 10000, 'sha512', () => {
//     console.log(`Hash: ${i + 1} - ${Date.now() - start}ms`);
//   });
// }

// const https = require('node:https');

// for (let i = 0; i < MAX_SIZE; ++i) {
//   https
//     .request('https://google.com', (res) => {
//       res.on('data', () => {});
//       res.on('end', () => {
//         console.log(`Request: ${i + 1} - ${Date.now() - start}ms`);
//       });
//     })
//     .end();
// }

const fs = require('node:fs');

for (let i = 0; i < MAX_SIZE; ++i) {
  fs.readFile(__filename, (err, data) => {
    console.log(`FileReading: ${i + 1} - ${Date.now() - start}ms`);
  });
}
