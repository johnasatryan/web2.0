// // function Person(name, age) {
// //   // console.log('hello function Person');
// //   this.setName = function (value) {
// //     if (!value) {
// //       throw new Error("Name can't be empty");
// //     }
// //     this._name = value;
// //   };

// //   this.setAge = function (value) {
// //     if (value <= 0) {
// //       throw new Error('Age must be greater than 0');
// //     }
// //     this._age = value;
// //   };

// //   this.setName(name);
// //   this.setAge(age);
// // }

// // let p1 = new Person('James', 3);

// // // p1.age = 23;

// // // console.log(Person.prototype);

// // // function foo() {}

// // // console.log(foo.constructor);

// // // const foo = new Function(`
// // //   let a = 12;
// // //   let b = 23;
// // //   x = 55;
// // //   console.log(a + b)

// // //   `); // function foo(a, b) {return a + b}

// // // foo();

// // // console.log(global);
// // // console.log(Person.constructor);

// // // let b = new Person.constructor("console.log('hello animast function')");

// // // // console.log(b);

// // // b();

// // console.log(Person.prototype);

// // function foo() {}

// // foo.toString();

// // const car1 = { model: 'Audi' };

// // const car2 = { color: 'Red' };

// // Object.setPrototypeOf(car2, car1);

// // console.log(car2.model);
// // console.log(car2);

// // es6

// class Person {
//   name = null;
//   age = null;
//   constructor(name, age) {
//     this.setName(name);
//     this.age = age;
//   }

//   setName(value) {
//     if (!value) {
//       throw new Error('bla bla');
//     }
//     this.name = value;
//   }
// }

// // let p1 = new Person('James', 12);

// // console.log(p1);
// // console.log(Person);

// // class Mlass {
// //   name = null;
// //   age = null;

// // //   setName() {}
// // //   setAge() {}
// // // }

// // // let a = new A();

// // // console.log(a);

// // let o = { name: 'James', age: 23 };

// // o.toString();
// // function foo() {}
// // console.log(foo instanceof Function);

// class Mlass {
//   name;
//   age;

//   constructor() {
//     this.validation = function (name, age) {

//     }
//   }
//   setName() {
//     console.log(this);
//   }

// }

// p1 = new Mlass();

// p1.setName();

// Mlass.someMethod();

class Person {
  #age;

  constructor(name, age) {
    this.age = age;
  }
  get age() {
    console.log('getter called...');
    return this.#age;
  }

  set age(value) {
    console.log('setter called...');
    if (value <= 0) {
      throw new Error('bla bla');
    }
    this.#age = value;
  }
}

let p1 = new Person();

// console.log(p1.__proto__);
p1.age = 23;

// p1.age;

// p1._age = 0;

// console.log(p1);

('use strict');

class P {
  #age;

  constructor(value) {
    this.#age = 23;
  }

  setAge(value) {
    this.#age = value;
  }
  getAge() {
    return this.#age;
  }
}

const p = new P();

console.log(p.age);
