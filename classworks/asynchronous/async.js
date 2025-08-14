// // Transformation of async/await (Promise)

// async function f() {
//   console.log('Hello world');
//   return 'Line 5';
// }

// // function f() {
// //   console.log('Hello world');

// //   return Promise.resolve('Line 11');
// // }

// console.log('Line 7');
// const res = f();
// res.then((value) => {
//   console.log(value);
// });
// console.log('Line 9');

// custom_fetch('https');

// function custom_fetch(url) {
//   const promise = new Promise(function executor(resolve, reject) {
//     if (url.startsWith('https')) {
//       resolve({ status: 'Ok', user: { name: 'James', age: 12 } });
//     } else {
//       reject({
//         status: 'Failed',
//         message: 'You are not allowed to use another protocol',
//       });
//     }
//   });

//   return promise;
// }

// function f(url) {
//   const result = custom_fetch(url);
//   result
//     .then((value) => {
//       console.log(value);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// }

// f('ftp://jsonplaceholder.typicode/posts');

async function custom_fetch(url) {
  try {
    var x = 23;
    const fetched_result = await fetch(url);
    console.log(fetched_result);
    return;
  } catch (err) {
    console.log(err.message);
    console.log(x);
    return;
  } finally {
    console.log('hello finally');
  }
}

custom_fetch('ftp://jsonplaceholder.typicode.com/posts');
