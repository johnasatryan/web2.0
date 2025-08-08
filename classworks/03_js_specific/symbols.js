// // Iterable Protocol

// const arr = [{}, 345];

// const iterator = arr[Symbol.iterator]();
// // console.log(iterator)

// // console.log(iterator.next());
// // console.log(iterator.next());
// // arr.push('James');
// // console.log(iterator.next());

// const person = {
//   name: 'James',
//   age: 23,

//   [Symbol.iterator]: function () {
//     const values = Object.values(this);
//     let index = 0;
//     return {
//       next: function () {
//         if (index++ < values.length) {
//           return {
//             value: 'animast',
//             done: false,
//           };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };

// function foo(name, age) {
//   console.log(name);
//   console.log(age);
// }

// // foo(...person);

// for (const item of person) {
//   console.log(item);
// }

// // let chlp = 'snickers';
// // const obj = { [chlp]: 23 };

// function rend() {
//   let res = [];

//   for (let i = 0; i < 10000000; ++i) {
//     res.push(i);
//   }
// }
