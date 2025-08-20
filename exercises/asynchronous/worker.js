onmessage = function (event) {
  event.data[0] = 'hello';
  this.postMessage(event.data);
};
