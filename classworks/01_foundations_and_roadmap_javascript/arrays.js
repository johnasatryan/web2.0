// // function foo(a) {
// //   console.log(a);
// //   console.log(arguments);
// // }

// // foo(1, 2);

// function f() {}

// // f.x = 23;

// // console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(f)));

// // console.log(f);
// // const f = {
// //   arguments: [],
// //   caller: '0x1000', // [[Call]]
// //   x: 23,
// // };

// function factorial(n) {
//   if (!factorial.cache[n]) {
//     if (n <= 1) return 1;
//     console.log("factorial value didn't calculate");
//     factorial.cache[n] = n * factorial(n - 1);
//   }
//   console.log('miangamic gtav');
//   return factorial.cache[n];
// }
// factorial.cache = {};

// factorial(5);
// console.log('>>>>>>>>>>');
// console.log(factorial(4));

// console.log(factorial.cache);

// function foo() {
//   console.log('foo called...');
// }

// var a = foo;

// console.log(a());
// var a;
// console.log(a);
// a = function () {};

// foo();
// function foo() {}

// console.log(x);

// let x = 23;

// (function () {
//   console.log('hello');
// })();

// +function foo() {
//   console.log('hello');
// }();

// foo()

// const arr = [];

// arr.push(23);
// console.log(arr);
// descriptor

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf([])));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// console.log(arr1.concat(arr2));

// let x = arr1.find(function (x, y) {
//   console.log(index);
// });

// console.log(x);

// console.log(arr2.shift());

// console.log(arr2);
// console.log(arr2.length);

// arr2.unshift('hello');
// console.log(arr2);





