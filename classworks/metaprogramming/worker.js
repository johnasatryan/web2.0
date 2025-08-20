// postMessage('something went wrong');

// setTimeout(() => {
//   postMessage('hello another post');
// }, 5000);

console.log('Worker.js');

self.onmessage = function (event) {
  console.log(event.data);

  event.data.age = 23;
  // this.postMessage(event.data.age);
};
