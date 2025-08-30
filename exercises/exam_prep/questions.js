// // // // // // // const sym1 = Symbol('id');
// // // // // // // const sym2 = Symbol('id');
// // // // // // // const sym3 = Symbol.for('global');
// // // // // // // const sym4 = Symbol.for('global');

// // // // // // // console.log(sym1 === sym2);
// // // // // // // console.log(sym3 === sym4);
// // // // // // // console.log(typeof sym1);
// // // // // // // console.log(sym1.toString());
// // // // // // // console.log(sym1.description);

// // // // // // // console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(sym1)));

// // // // // // // // const x = sym1.constructor('23');

// // // // // // // // console.log(x);

// // // // // // // // const p = { name: 'James' };

// // // // // // // // const s = new p.constructor();

// // // // // // // // console.log(s);

// // // // // // // class Symb {
// // // // // // //   #global_registry = {};
// // // // // // // }

// // // // // // const id = Symbol('id');
// // // // // // const obj = {
// // // // // //   name: 'Alice',
// // // // // //   [id]: 123,
// // // // // //   age: 30,
// // // // // // };

// // // // // // console.log(Object.keys(obj)); // ?
// // // // // // console.log(Object.getOwnPropertyNames(obj)); // ?
// // // // // // console.log(Object.getOwnPropertySymbols(obj)); // ?
// // // // // // console.log(obj[id]); // ?

// // // // // // for (let key in obj) {
// // // // // //   console.log(key); // ?
// // // // // // }

// // // // // // // function keys(self) {
// // // // // // //   let result = [];

// // // // // // //   for (const key of Object.getOwnPropertyNames(self)) {
// // // // // // //     result.push(key);
// // // // // // //   }
// // // // // // //   return result;
// // // // // // // }

// // // // // const arr = [1, 2, 3];

// // // // // const sym1 = Symbol(11);

// // // // // const obj = {
// // // // //   [Symbol.toPrimitive]: function () {
// // // // //     return 13;
// // // // //   },
// // // // // };
// // // // // console.log(+obj);

// // // // class Calculator {
// // // //   static PI = 3.14159;

// // // //   constructor(value) {
// // // //     this.value = value;
// // // //   }

// // // //   static add(a, b) {
// // // //     return a + b;
// // // //   }

// // // //   multiply(factor) {
// // // //     return this.value * factor;
// // // //   }

// // // //   static getPI() {
// // // //     return this.PI;
// // // //   }
// // // // }

// // // // const calc = new Calculator(5);

// // // // console.log(Calculator.add(3, 7)); // 10 // +
// // // // console.log(Calculator.PI); // Pi // +
// // // // console.log(calc.multiply(2)); // 10 // +
// // // // // console.log(calc.add(1, 2)); // not a function //
// // // // console.log(calc.PI); // undefined

// // // // class Mlass {
// // // //   static x = 23;
// // // //   static m() {
// // // //     console.log(this);
// // // //     console.log('Mlass::m');
// // // //   }

// // // //   f() {
// // // //     console.log('instance::f');
// // // //   }
// // // // }

// // // // class A {
// // // //   static count = 0;

// // // //   constructor() {
// // // //     A.count++;
// // // //     this.id = A.count;
// // // //   }
// // // // }

// // // // const res = [];

// // // // for (let i = 0; i < 10; ++i) {
// // // //   res.push(new A());
// // // // }

// // // // for (const item of res) {
// // // //   console.log(item.id);
// // // // }

// // // // delete res[3];

// // // // for (const item of res) {
// // // //   // console.log(item.id);
// // // //   if (!item) {
// // // //     console.log('item deleted');
// // // //     continue;
// // // //   }
// // // // }

// // // class Parent {
// // //   static name = 'Parent';

// // //   static getName() {
// // //     return this.name;
// // //   }

// // //   static getClassName() {
// // //     return this.constructor.name;
// // //   }
// // // }

// // // class Child extends Parent {
// // //   static name = 'Child';
// // // }

// // // // console.log(Parent.getName());            // Parent ?
// // // // console.log(Child.getName());             // ?
// // // // console.log(Parent.getClassName());       // ?
// // // // console.log(Child.getClassName());        // ?
// // // // console.log(Child.constructor === Child); // ?

// // // class A {
// // //   foo() {}
// // //   static m() {
// // //     console.log('A::static');
// // //   }
// // //   constructor() {
// // //     this.mlp = 12;
// // //   }
// // // }

// // // Object.prototype['chlp'] = 21;

// // // class B extends A {
// // //   bar() {}
// // // }

// // // // console.log('A own properties', Object.getOwnPropertyNames(A));
// // // // console.log('class A->external', A.prototype);
// // // // console.log('class A->internal', Object.getOwnPropertyNames(A.__proto__));
// // // console.log('class B->external', B.prototype);
// // // // console.log('class B->internal', Object.getOwnPropertyNames(B.__proto__));

// // // // console.log('B own properties', Object.getOwnPropertyNames(B));

// // // const instance = new B();

// // // console.log(instance);

// // class A {}

// // A.x = 23;

// // class B extends A {}

// // B.y = 25;

// // console.log(Object.getOwnPropertyNames(B));

// console.log('Start');

// setTimeout(() => {
//   console.log('setTimeout 1');
//   Promise.resolve().then(() => console.log('Promise inside setTimeout'));
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log('Promise 1');
//     setTimeout(() => console.log('setTimeout inside Promise'), 0);
//   })
//   .then(() => {
//     console.log('Promise 2');
//   });

// setTimeout(() => {
//   console.log('setTimeout 2');
// }, 0);

// console.log('End');

console.log('Start');

// Nested timeouts
setTimeout(() => {
  console.log('Timeout 1');
  setTimeout(() => {
    console.log('Nested Timeout 1');
    Promise.resolve().then(() => console.log('Promise in Nested Timeout 1'));
  }, 0);

  queueMicrotask(() => {
    console.log('queueMicrotask in Timeout 1');
    setTimeout(() => console.log('Timeout in queueMicrotask'), 0);
  });
}, 0);

// Promise chain with nested async operations
Promise.resolve()
  .then(() => {
    console.log('Promise 1');
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Promise with setTimeout');
        resolve();
      }, 0);
    });
  })
  .then(() => {
    console.log('Promise 2');
    queueMicrotask(() => console.log('queueMicrotask in Promise chain'));
  });

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

console.log('End');
