// // // console.log("false" == 0)
// // // console.log(0 ?? 2)
// // // console.log(typeof 4 + 2)
// // // console.log(3>2>1)
// // // console.log(+"           42       ")

// // Array.prototype.customFilter = function (fn, thisArg) {
// //   const res = [];
// //   for (let i = 0; i < this.length; ++i) {
// //     if (i in this) {
// //       // (value, i, arr) { }
// //       let tmp = fn.call(thisArg, this[i], i, this);
// //       if (tmp) {
// //         res.push(this[i]);
// //       }
// //     }
// //   }
// //   return res;
// // };
// // const arr = [12, 3, 1, 45, 9, 8, 23, 4];

// // const counter = {
// //   x: 12,
// //   y: 23,
// // };

// // const res = arr.customFilter(function (value, index, arr) {
// //   return value > this.x;
// // }, counter);

// // console.log(res);

// // const fn = arr.filter;

// // const arr2 = [1, undefined, 2];

// // // pure function
// // function add(a, b) {
// //   return a + b;
// // }

// // // console.log(foo);

// // // var foo = function () {
// // //   console.log('hello foo');
// // // };

// // // let var =1;

// // // foo();
// // // function foo() {
// // //   console.log('A');
// // // }

// // // foo();

// // // var foo = function () {
// // //   console.log('B');
// // // };

// // // foo();

// function foo(arr) {
//   arr.filter((a, index, arr) => {
//     if (a < 0) {
//       delete arr[index];
//     }
//   });
// }
// const arr = [1, 2, -3, 4, -5, -6];
// foo(arr);
// console.log(arr);

function memoize_factorial(fn) {
  let cache = {};
  return function inner(n) {
    console.log(cache);
    if (!cache[n]) {
      cache[n] = fn(n);
    }
    return cache[n];
  };
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// const inner = memoize_factorial(factorial);

// console.log(inner(100));
// console.log(inner(100));

const person = {
  age: 23,
};

const p = Object.create(person, {
  age: {
    value: 55,
    enumerable: true,
  },
});

// Object.seal(p);

console.log(Object.getOwnPropertyDescriptor(person, 'age'));
