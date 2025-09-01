// class Parent {
//   static name = 'Parent';

//   static getName() {
//     return this.name;
//   }

//   static getClassName() {
//     return this.constructor.name;
//   }
// }

// class Child extends Parent {
//   static name = 'Child';
// }

// const obj = new Parent();

// console.log(Parent.getName()); // Parent
// console.log(Child.getName()); // Child
// console.log(Parent.getClassName()); // Parent // Function
// console.log(Child.getClassName()); // Child // Function
// console.log(Child.constructor === Child); //

// const mySymbol = Symbol.for('test');

// class Test {
//   static [mySymbol] = 'static symbol property';

//   static getSymbolProp() {
//     return this[mySymbol];
//   }

//   [mySymbol] = 'instance symbol property';

//   getInstanceSymbolProp() {
//     return this[mySymbol];
//   }
// }

// const instance = new Test();

// console.log(Test[mySymbol]); // static
// console.log(Test.getSymbolProp()); // static
// console.log(instance[mySymbol]); // instance
// console.log(instance.getInstanceSymbolProp()); // instance

// console.log(Test[Symbol.for('test')]); // static

// class DatabaseConnection {
//   constructor() {
//     if (DatabaseConnection.instance) {
//       return DatabaseConnection.instance;
//     }

//     this.connected = false;
//     DatabaseConnection.instance = this;
//     return this;
//   }

//   connect() {
//     this.connected = true;
//     return 'Connected to database';
//   }

//   getStatus() {
//     return this.connected ? 'Connected' : 'Disconnected';
//   }
// }

// const db1 = new DatabaseConnection();
// const db2 = new DatabaseConnection();

// console.log(db1 === db2); // ?
// console.log(db1.connect()); // ?
// console.log(db2.getStatus()); // ?
// console.log(db1.getStatus()); // ?

// class DatabaseConnection {
//   static #_instance = null;

//   constructor() {
//     if (DatabaseConnection.#_instance) {
//       return DatabaseConnection.#_instance;
//     }

//     DatabaseConnection.#_instance = this;
//   }
// }

// class Car {
//   constructor(type) {
//     this.type = type;
//   }

//   start() {
//     return `${this.type} started`;
//   }
// }

// // class CarFactory {
// //   static createCar(type) {
// //     switch (type) {
// //       case 'sedan':
// //         return new Car('Sedan');
// //       case 'suv':
// //         return new Car('SUV');
// //       default:
// //         throw new Error('Unknown car type');
// //     }
// //   }
// // }

// // const sedan = CarFactory.createCar('sedan');
// // const suv = CarFactory.createCar('suv');

// // console.log(sedan.start()); // ?
// // console.log(suv instanceof Car); // ?
// // console.log(CarFactory.createCar('truck')); // ?

// // class CarFactory {}

// // class Sedan extends CarFactory {}

// // class AutoStore {
// //   constructor(vehicle) {
// //     this.vehicle = vehicle;
// //   }

// //   start() {
// //     return `${this.vehicle} started...`;
// //   }
// // }

// // const sedan = new Sedan();

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   return `Hello, I'm ${this.name}`;
// };

// const john = new Person('John');

// console.log(john.__proto__ === Person.prototype); // true
// console.log(Object.getPrototypeOf(john) === Person.prototype); // true
// console.log(john.constructor === Person); // true
// console.log(john.hasOwnProperty('name')); // true
// console.log(john.hasOwnProperty('greet')); // false
// console.log('greet' in john); // true

// const grandParent = {
//   type: 'grandparent',
//   getValue() {
//     return `${this.type}: ${this.value || 'no value'}`;
//   },
// };

// const parent = Object.create(grandParent);
// parent.type = 'parent';
// parent.value = 100;

// const child = Object.create(parent);
// child.type = 'child';

// console.log(child.value);
// console.log(child.getValue()); // ?
// console.log(child.value);                                   // ?
// console.log(child.hasOwnProperty('value'));                 // ?
// console.log(Object.getPrototypeOf(child) === parent);       // ?
// console.log(Object.getPrototypeOf(parent) === grandParent); // ?

// delete parent.value;
// console.log(child.getValue());                              // ?

console.log('Start');

async function asyncFunc1() {
  console.log('asyncFunc1 start');
  await new Promise((resolve) => {
    console.log('Promise executor in asyncFunc1');
    setTimeout(() => {
      console.log('setTimeout in Promise executor');
      resolve();
    }, 0);
  });

  console.log('asyncFunc1 after await');
  return 'asyncFunc1 result';
}

async function asyncFunc2() {
  console.log('asyncFunc2 start');

  const result = await asyncFunc1();
  console.log('asyncFunc2 got result:', result);

  queueMicrotask(() => {
    console.log('queueMicrotask in asyncFunc2');
  });

  return 'asyncFunc2 result';
}

setTimeout(() => {
  console.log('Timer 1');
}, 0);

asyncFunc2().then((result) => {
  console.log('Final result:', result);
});

Promise.resolve().then(() => {
  console.log('Independent Promise');
});

console.log('End');

// async function foo() {
//   console.log('hello world');
// }

// async function foo2() {
//   console.log('foo2');
//   const result = await foo();

// }
// queueMicrotask(() => {
//   console.log('QueueMicro');
// });

// foo2();

