// 1. with object literal
// const person = {};

// function greet(person) {
//   person.name = 'James';
// }
// 2. new Object
let another_person = new Object();

// console.log(person);
// console.log(another_person);

// 3. Object.create static method

// let person3 = Object.create(null);

// console.log(person.toString());

const person = {
  name: 'Alice',
  age: 23,
  isStudent: false,
  greet: function () {
    console.log('Hello world');
  },
};

// console.log(person.name);
// console.log(person.age);

// person.greet();

// console.log(person.toString());

// console.log(Object.getOwnPropertyNames(Object.prototype));

Object.defineProperty(person, 'email', {
  value: 'alice@example.com',
  writable: true,
  enumerable: true,
  configurable: false,
});

person.age = 12;
person.email = 'bob@example.com';

delete person.name;
console.log(person);
console.log(person.email);
