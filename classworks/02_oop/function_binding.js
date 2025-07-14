// const person = {
//   name: 'James',
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };

// // person.greet();

// let x = person.greet;
// // x();
// // this = undefined

// const obj = {
//   name: 'Obj name',
// };
// // x.call(obj);
// // x.call(person);

// // x.prototype.customCall = function (context) {
// //   context['chlp'] = this;
// //   let result = context['chlp']();
// // };

// // x.prototype.customCall(person);

// const btn = document.getElementById('btn');

// // const Button = {
// //   clicked: false,
// //   click: function () {
// //     console.log(this);
// //     this.clicked = true;
// //   },
// // };

// // console.log(Button.clicked);
// // Button.click();
// // console.log(Button.clicked);

// console.log(Button.clicked);
// btn.addEventListener('click', Button.click);

// 1. default
// 2. implicit
// 3. explicit
// 4. new

// function Person() {
//   this.name = 'Bob';
//   this.method = function () {
//     console.log(this);
//   };
// }

// let p = new Person();
// p.method();

// let x = p.method;
// x();

// console.log(exports);