// // // const obj = {};

// // // Object.defineProperty(obj, 'test', {
// // //   value: 43,
// // //   writable: true,
// // //   enumerable: false,
// // //   configurable: true,
// // // });
// // // // console.log(Object.getOwnPropertyDescriptors(obj));

// // // Object.defineProperty(obj, 'test', {
// // //   get: function () {
// // //     return 0;
// // //   },
// // // });

// // // console.log(Object.getOwnPropertyDescriptors(obj));

// // // Object.defineProperty(obj2, 'test', {
// // //   get: function () {
// // //     return 0;
// // //   },
// // //   set: function () {
// // //     return 2;
// // //   },
// // // });

// // // console.log(Object.getOwnPropertyDescriptors(obj2));

// // // obj.test = 'hello';

// // // console.log(obj.test);

// // // const obj = {};

// // // Object.defineProperty(obj, 'test', {
// // //   value: 3,
// // //   enumerable: false,
// // //   configurable: true,
// // // });

// // // obj.test = 23;

// // // delete obj.test;

// // // console.log(obj.test);

// // // Object.defineProperty(obj, 'test', {
// // //   configurable: true,
// // //   enumerable: true,
// // // });

// // // console.log(Object.getOwnPropertyDescriptor(obj));

// // function foo() {
// //   let ls = [];
// //   for (let i = 0; i < 4; ++i) {
// //     ls.push(() => {
// //       return i * 3;
// //     });
// //   }
// //   return ls;
// // }

// // const arr = foo();

// // for (var i = 0; i < arr.length; ++i) {
// //   console.log(arr[i]());
// // }

// // let obj = {};

// // let res = obj?.prop?.nested;
// // if (obj && obj.prop && obj.prop.nested) {

// // }

// function foo() {
//   let a = 23;
//   return function bar() {
//     console.log('hello world');
//   };
// }

// const fn = foo();

// fn();

// let obj = {};
// let obj2 = Object.create(Object.prototype);

// delete Object.prototype.toString;

// console.log(obj.toString());

// class Mlass {
//   static foo() {
//     console.log(this);
//   }
// }

// Mlass.foo();

// let obj = new Mlass();
// obj.foo()

// class Box {
//   constructor() {
//     console.log(new.target);
//   }
// }

// console.log(Number());

function LearnCpp() {}

LearnCpp.prototype = {
  elem: 11,
  test() {},
};

// const lang = new LearnCpp();
// console.log();

class Person {
  toString() {
    return 'person';
  }
}

let p = new Person();

let table = {};

table[p] = 99;

console.log(Object.keys(table)[0]);
