// // // Transformation of async/await (Promise)

// // async function f() {
// //   console.log('Hello world');
// //   return 'Line 5';
// // }

// // // function f() {
// // //   console.log('Hello world');

// // //   return Promise.resolve('Line 11');
// // // }

// // console.log('Line 7');
// // const res = f();
// // res.then((value) => {
// //   console.log(value);
// // });
// // console.log('Line 9');

// // custom_fetch('https');

// // function custom_fetch(url) {
// //   const promise = new Promise(function executor(resolve, reject) {
// //     if (url.startsWith('https')) {
// //       resolve({ status: 'Ok', user: { name: 'James', age: 12 } });
// //     } else {
// //       reject({
// //         status: 'Failed',
// //         message: 'You are not allowed to use another protocol',
// //       });
// //     }
// //   });

// //   return promise;
// // }

// // function f(url) {
// //   const result = custom_fetch(url);
// //   result
// //     .then((value) => {
// //       console.log(value);
// //     })
// //     .catch((err) => {
// //       console.log(err.message);
// //     });
// // }

// // f('ftp://jsonplaceholder.typicode/posts');

// // async function custom_fetch(url) {
// //   try {
// //     var x = 23;
// //     const fetched_result = await fetch(url);
// //     console.log(fetched_result);
// //     return;
// //   } catch (err) {
// //     console.log(err.message);
// //     console.log(x);
// //     return;
// //   } finally {
// //     console.log('hello finally');
// //   }
// // }

// // custom_fetch('ftp://jsonplaceholder.typicode.com/posts');

// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => console.log('Executor'), 0);

// //   resolve('Resolve');
// // });

// // console.log('Before promise');

// // promise.then((val) => {
// //   console.log(val);
// // });
// // console.log('After promise');

// async function foo() {
//   console.log('1');
//   await console.log('5');
//   Promise.resolve();
//   console.log('2');
//   return 'Promise object';
// }

// // function foo() {
// //   console.log('1');
// //   Promise.resolve().then(() => {
// //     console.log('2');
// //   });

// //   return Promise.resolve();
// // }

// // console.log('3');
// // foo().then((value) => {
// //   console.log(value);
// // });
// // console.log('4');

// // async function resolve_data() {
// //   const result = await fetch('https://google.com');
// //   return result;
// // }

// // resolve_data().then((value) => {
// //   console.log(value);
// // });

// function getUser() {
//   let promises = [];

//   for (let i = 0; i < 3; ++i) {
//     const promise = fetch(
//       `https://jsonplaceholder.typicode.com/users/${i + 1}`,
//     );
//     promises.push(promise);
//   }
//   return promises;
// }
// async function getResults() {
//   const result = await getUser();

// }

// getResults();

// const fs = require('node:fs');

// let file_data = '';
// const data = fs.readFileSync('index.html');

const promise = new Promise((resolve, reject) => {
  resolve(1);
});

promise
  .then((value) => {
    console.log(value);
    return 2;
  })
  .then((value) => {
    console.log(value);

    return 3;
  })
  .then((value) => {
    console.log(value);
  });
