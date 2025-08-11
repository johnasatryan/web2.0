// const promise2 = new Promise(function executor(resolve, reject) {
//   console.log('Executor runs');

//   // resolve('Something resolved...');
//   if (5 < 0) {
//     resolve('Everything is ok');
//   } else {
//     reject('type must be string');
//   }
// });

// // .catch((reason) => {
// //   console.log(reason);
// // });

// Promise.reject('hello world').catch((value) => {
//   console.log(value);
// });

// console.log('Hello synchronous');

// Promise.all;
// Promise.allSettled;
// Promise.race;
// Promise.any;

// const promise1 = new Promise((resolve, reject) => {
//   resolve('Promise1');
// });

// const promise2 = new Promise((resolve, reject) => {
//   reject('Promise2');
// });

// const promise3 = new Promise((resolve, reject) => {
//   resolve('Promise3');
// });

// Promise.all([promise1, promise2, promise3])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });

// Promise.race([promise2, promise1, promise3])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });
// Promise.allSettled([promise1, promise2, promise3])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });

// Promise.any([promise2, promise2, promise2])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });

const person = { name: 'James', age: 23, email: 'email', password: 'password' };

const { password, ...personA } = person; // const name = person.name; const age = person.age


console.log(otherStuff);
