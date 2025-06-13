// 1. with object literal
// const person = {};

// function greet(person) {
//   person.name = 'James';
// }
// 2. new Object
// let another_person = new Object();

// console.log(person);
// console.log(another_person);

// 3. Object.create static method

// let person3 = Object.create(null);

// console.log(person.toString());

// const person = {
//   name: 'Alice',
//   age: 23,
//   isStudent: false,
//   greet: function () {
//     console.log('Hello world');
//   },
// };

// console.log(person.name);
// console.log(person.age);

// person.greet();

// console.log(person.toString());

// console.log(Object.getOwnPropertyNames(Object.prototype));

// Object.defineProperty(person, 'email', {
//   value: 'alice@example.com',
//   writable: true,
//   enumerable: true,
//   configurable: false,
// });

// person.age = 12;
// person.email = 'bob@example.com';

// delete person.name;
// console.log(person);
// console.log(person.email);

// const b = Boolean('0');
// const c = !!57;

// console.log(c.toString()); // new Boolean(57).toString();

const a = new Boolean(0);
// console.log(a.valueOf());

// class Person {
//   constructor() {
//     let count = 0;
//     count++;
//   }
//   static incrementCount() {

//   }
// }

// let p = new Person('James'); // Person.constructor(name);

// JSObject -> Object -> Array, Function, ...

// console.log(typeof person);
// console.log(typeof Object);
// Object.prototype.length = 23;
// console.log(person.length);

// const arr = [1, 2, 3];
// arr.length

// class Student {}

// let p = new Student();

// console.log(Student);

// const person = { x: 'James', age: 55 };

// console.log(person.name);
// console.log(Object.name(person));

console.log(Object.getOwnPropertyNames(Object));
// console.log(Object.name);

function foo(a, b, c) {}

// console.log(foo.length);
// console.log(foo.name);
// const arr = [1, 2, 3, 4];

// const person = {};
// console.log(person.name);

console.log(Object.getOwnPropertyNames(Object.prototype));

// const prototype = {
//   toString: '[object Object]',
// };
const person = { name: 'James', age: 12 };

const student = Object.create(person);

// function Object() {
//   this.prototype = prototype;
// }

// console.log(person.toString());

// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(student)));
// console.log(Object.getPrototypeOf(student));
// console.log(Object.getPrototypeOf(person));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object)));

Object.prototype.chlp = function () {
  console.log('animast external prototype');
};

let obj = {};
obj.chlp();

// Array.prototype.customFilter = function (object, fn) {
//   let result = [];
//   for (let i = 0; i < object.length; ++i) {
//     if (fn(object[i])) {
//       result.push(object[i]);
//     }
//   }
//   return result;
// };

// let arr = [1, 2, 3, 4];

// console.log(
//   arr.customFilter(arr, function (elem) {
//     return elem % 2 === 0;
//   }),
// );

const another_person = {};
Object.assign(another_person, person);

console.log(another_person);
another_person.name = 'Bob';
console.log(person);
console.log(another_person);
Object.defineProperty(person, 'esiminch', {
  value: 'another value',
  writable: false,
  enumerable: true,
  configurable: true,
});
// console.log(Object.getOwnPropertyDescriptors(person));
// ===

// console.log(Object.is(NaN, NaN));
// console.log(NaN === NaN);

// Number.isNaN()

// Object.preventExtensions(person);

// Object.freeze(person);

person.name = 'Bob';
person.x = 23;
console.log(person);

// Object.defineProperty(person, 'key', {
//   value: 12,
// });

Object.setPrototypeOf(person, null);
console.log(Object.getPrototypeOf(person));

console.log(Object.entries(person));
console.log(Object.fromEntries([['name', 'Bob']]));
