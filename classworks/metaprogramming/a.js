const person = { name: 'Bob' };

console.log(person);

let globalWorker = {};

function postMessage(message) {
  globalWorker.event.data = message;
}


postMessage('hello a.js');

