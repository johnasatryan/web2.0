// // 1. Buffer.from
// // 2. Buffer.alloc
// // 3. Buffer.allocUnafe
// // 4. Buffer.concat
// // 5. Buffer.isBuffer
// // 6. Buffer.compare
// // 7. Buffer.byteLength
// // 8. Buffer.isEncoding("utf-8")

// // Instance methods

// // 1. toString(encoding, start?, end?)
// // 2. slice(start, end)
// // 3. subarray(...)
// // 4. copy(target, targetStart, sourceStart, sourceEnd)
// // 5. fill
// // 6. Write integers
// // 7. Read integers
// // 8. equals
// // 9. indexOf
// // 10. includes
// // 11. length
// // 12. reverse es2023
// // 13. buffer

// // const bf = new Buffer('hello');

// // const bf = Buffer.from([97, 99, 97]);

// // const bf = Buffer.alloc(10, 'հ', 'utf-8');

// let bf = null;

// for (let i = 0; i < 10000000; ++i) {
//   bf = Buffer.alloc(10);
//   bf.fill('hello world');
// }

// let length = bf.length;

// bf = null;

// const bf2 = Buffer.allocUnsafe(length);
// console.log(bf2.toString());

// const bf = Buffer.from('hello');
// const bf2 = Buffer.from('world');

// const bf3 = bf.slice(0, 5);
// console.log(bf3.toString());

// bf3[0] = 97;

// console.log(bf.toString());

// const bf = Buffer.alloc(8);

// bf.writeUint16LE(5);

// console.log(bf);

const fs = require('fs');

const fd = fs.openSync('file.json', 'w+');

fs.writeSync(2, 'hello');

fs.closeSync(fd);
