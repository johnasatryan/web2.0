// // function store(num) {
// //   if (!num) {
// //     throw new Error('Num is undefined');
// //   }

// //   let saved_value = null;

// //   function get() {
// //     return num;
// //   }

// //   function set(value) {
// //     num = value;
// //   }

// //   function save() {
// //     saved_value = num;
// //   }

// //   function reset() {
// //     num = saved_value;
// //   }

// //   return [get, set, save, reset];
// // }

// // const [get, set, save, reset] = store(42);

// // console.log(get()); //42
// // save();

// // set(100);
// // console.log(get()); //100
// // // set(get() * 2);
// // // set(get() / 4);
// // // get(); //50

// // reset();
// // console.log(get()); //42
// // // set(200);
// // // save();
// // // set(400);
// // // set(500);
// // // get(); //500
// // // set(get() * 2);
// // // get(); //1000
// // // reset();
// // // get(); //200

// // function outer() {
// //   let count = 0;
// //   return function inner() {
// //     ++count;
// //     console.log(count);
// //   };
// // }

// // const counter1 = outer();
// // counter1();
// // counter1();

// // const counter2 = outer();
// // counter2();

// // function outer() {
// //   var count = 0;

// //   function inner1() {

// //     ++count;
// //     return count;
// //   }

// //   function inner2() {
// //     ++count;
// //     return count;
// //   }

// //   return [inner1, inner2];
// // }

// // let arr = outer();
// // console.log(arr[0]());

// // console.log(arr[0]());

// // console.log(arr[1]());

// // let matrix = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ];

// // // transposing a matrix
// // // let transposed = [[1, 4, 7]
// // //              ,[2, 5, 8]
// // //              ,[3, 6, 9]]

// // const transposed = [];
// // // for (let i = 0; i < matrix.length; ++i) {
// // //   let tmp = [];
// // //   for (let j = 0; j < matrix[0].length; ++j) {
// // //     tmp.push(matrix[j][i]);
// // //   }
// // //   transposed.push(tmp);
// // // }

// // // console.log(transposed);

// // function foo() {
// //   return "I'm the outer function";
// // }

// // function test() {
// //   console.log(bar);
// //   return foo();
// //   var bar = "I'm a variable";

// //   // function foo() {
// //   //   return "I'm the inner function";
// //   // }

// // }
// // console.log(test());

// // function foo(string_list) {
// //   let res = [];

// // for (let i = 0; i < string_list.length; ++i) {
// //   res.push(string_list[i].length);
// // }
// // for (const item of string_list) {
// //   res.push(item.length);
// // }

// // return res;

// //   return string_list.map(function (item) {
// //     return item.length;
// //   });
// // }

// // // console.log(foo(['hello', 'bye', 'world']));
// // // // console.log(Object.entries(obj));

// // // console.log(5 === 10)

// // let a = () => {
// //   console.log('a executed');
// //   return undefined;
// // };

// // const b = () => {
// //   console.log('b executed');
// //   return null;
// // };
// // const c = () => {
// //   console.log('c executed');
// //   return +b();
// // };

// // console.log(a() ?? b());
// // console.log(c() ?? a());
// // console.log(b() && a());

// // const arr = [23, 'abc', { name: 'Max', age: '25' }, function foo() {}, []];
// // arr[-221] = 13;

// // console.log(Object.getOwnPropertyNames(arr));

// // const a = 99;

// // const b = foo(a);

// // function foo() {
// //   return a++;
// // }
// // console.log(a);
// // console.log(b);

// // function foo() {
// //   a = 33;
// // }

// // foo();
// // const a = 23;
// // console.log(a);

// const person = {
//   name: 'James',
//   age: 23,
// };

// const student = {
//   avg_score: 100,
// };

// // const personStudent = {
// //   ...person,
// //   ...student,
// // };

// // // console.log(personStudent);

// // // const { name, ...restProperties } = personStudent;

// // let name = personStudent.name;

// // name = 'Bob';

// // const updatedStudent = { ...personStudent, name };

// // console.log(updatedStudent);

// // const arr = [1, 2, 3, 4, 5];

// // const arr2 = [];

// // for (const item of arr) {
// //   arr2.push(item);
// // }

// // arr2.push('hello');
// // arr2.push(() => {});

// function foo() {
//   let x = 0;
//   return function () {
//     return x++;
//   };
// }
// const moo = foo();
// console.log(moo());
// console.log(moo());
// const boo = foo();
// console.log(boo());
// console.log(boo());

// // function postfix(x) {
// //   let tmp = x;
// //   x += 1;
// //   return tmp;
// // }

// // function prefix(x) {
// //   return x + 1;
// // }

// class Person {
//   constructor(name) {
//     if (new.target === Person) {
//       throw new Error('ya ya ya');
//     }
//   }
// }

// class Student extends Person {
//   constructor(name, age) {
//     super();
//     console.log(new.target);
//   }
// }
// const x = new Person();

const obj = {
  name: 'Bob',
  method: function () {
    console.log(this);

    function bar() {
      console.log(this);
    }
    bar();
  },
};

obj.method();
