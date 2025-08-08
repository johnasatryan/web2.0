// // const btn = document.getElementById('btn');

// // btn.addEventListener('click', () => {
// //   console.log('Hello');
// // });

// async function foo() {
//   return 13;
// }

// async function bar() {
//   console.log(await foo());
// }

// bar();

// const promise = new Promise(function executor(resolve, reject) {
//   console.log('Hello promise');
//   resolve('es haskanum em vor sa functione');
//   console.log('AFter resolve');
// });

// promise.then();
// promise.catch();
// promise.finally();

// console.log(promise);

const promise = new Promise(function executor(resolve, reject) {
  resolve('Something went wrong...');
});

promise
  .then((value) => {
    console.log(value);
  })
  .then((value) => {
    console.log(value);
  })
  .then((value) => {});
