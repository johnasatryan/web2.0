// const { MicrotaskQueue, MacrotaskQueue, CallStack } = require('./event_loop');

// function synch1() {
//   console.log('Synchronous code...');
// }

// setTimeout(function setTimeout1() {
//   console.log('Task queue 1');
// }, 1000);

// Promise.resolve().then(function Microtask1() {
//   console.log('Microtask 1');

//   setTimeout(function timeoutInMicrotask() {
//     console.log('SetTimeout inside Microtask');
//   }, 0);

//   queueMicrotask(function queueMicrotask() {
//     console.log('Microtask 2');
//   });
// });

// setTimeout(function setTimeout2() {
//   console.log('setTimeout 2');
//   Promise.resolve().then(function promiseInsideTimeout() {
//     console.log('Promise inside timeout');
//   });
// }, 0);

// function synch2() {
//   console.log('Finished program...');
// }

// const micro = new MicrotaskQueue();
// const macro = new MacrotaskQueue();
// const callStack = new CallStack();

// callStack.push(synch2);
// callStack.push(setTimeout);
// callStack.push(Promise);
// callStack.push(setTimeout);
// callStack.push(synch1);

// // [synch2, setTimeout, Promise, setTimeout, synch1]

// // After setTimeout call

// // 1. synch1
// callStack.pop();

// // 2. setTimeou1
// callStack.pop();

// // 3. Promise

// callStack.pop();

// // 4. setTimeout 2
// callStack.pop();

// // 5. synch2
// callStack.pop();

// macro.enqueue('setTimeout1');
// micro.enqueue('Promise');
// macro.enqueue('setTimeout2');

// // after all callStack []

// callStack.push('Microtask1');
// micro.dequeue();
// // console.log(Microtask1)

// macro.enqueue('timeoutInMicrotask');

// micro.enqueue('queueMicrotask');

// // output microtask
// // callstack is empty

// callStack.push(micro.dequeue());
// callStack.pop();
// callStack.pop();
// // callstack & microtasks are empty

// console.log(macro);

console.log('1');

async function asyncFunc() {
  console.log('2');
  await Promise.resolve();
  console.log('3');
  return 'async result';
}

Promise.resolve().then(() => console.log('4'));

asyncFunc().then((result) => console.log('5:', result));

console.log('6');
