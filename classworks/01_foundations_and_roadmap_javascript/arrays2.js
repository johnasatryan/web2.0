/*
There are severals ways to create arrays

• Array literals
• The ... spread operator on an iterable object
• The Array() constructor
• The Array.of() and Array.from() factory methods 
*/

// var obj = { 0: 'hello', 1: 2, 2: 3 };
// console.log(arr[0]);
// console.log(obj[0]);

// const key = 'hello';

// const obj = {
//   [key]: 12,
// };

// console.log(obj);
// var arr = ['hello', 2, 3];

// arr[100] = 'bye';

// console.log(arr[50]);

// const objectArray = {
//   0: 'hello',
//   1: 2,
//   2: 3,
//   100: 'bye',
//   empty: undefined,
// };

// console.log(arr.includes(undefined));

// const arr2 = [, , ,];
// const arr3 = [1];
// console.log(arr3.length);
// console.log(arr2.length);

// function getIndex() {
//   return 4;
// }

// arr[getIndex()] = 'hello';

// console.log(arr[arr.length - 1]);
// arr[-1] = 'chlp';

// console.log(arr);

// console.log(arr.at(-1))

// arr.length = -5;

// console.log(arr.length);
// console.log(arr);

// example 2 spread operator, ...

// array like

// function foo() {
//   const arr = [...arguments];
// }

// foo(1, 2, 3, 4);

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// arr1.push('hello');
// console.log(arr2);

// arr1 => [1, 2, 3] -> ...-> 1, 2, 3

// let obj = { name: 'James', age: 23 };
// const jsonObject = JSON.stringify(obj);

// console.log(typeof JSON.parse(jsonObject));

// let arr2 = [...arr1];
// // console.log(arr2);
// arr1[0][0] = 'hello';
// console.log(arr1);
// console.log(arr2);
let arr1 = [[1, 2, 3]];

const jsonArray = JSON.stringify(arr1);
// console.log(jsonArray); // "[[1, 2, 3]]"
let arr2 = JSON.parse(jsonArray);

// arr1[0][0] = 'hello';
// console.log(arr1);
// console.log(arr2);

// let obj = { name: 'James', age: 23 };

// let obj2 = obj;

// obj.name = 'Bob';

// console.log(obj2);

// const st = 'hello';

// const a = [...st];

// console.log(a);

// 3 example with constructor

// let arr = new Array(); // let arr = [];
// console.log(arr);

// only one argument
// let arr = new Array(4).fill(0);
// // console.log(arr);

// // greate than 1 argument

// // let arr = new Array(1, 2, 3);
// console.log(arr);

let arr = Array.of(4, 4, 1, 34, 5);
console.log(arr);

// 4 Array.from or Array.of

// since es6

let uint8 = new Uint16Array(6);
// console.log(uint8);
uint8[0] = 257;
console.log(uint8);
