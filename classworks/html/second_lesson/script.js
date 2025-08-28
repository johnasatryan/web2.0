const element1 = document.getElementById('one');

console.log(element);
setTimeout(() => {
  element1.innerHTML = 'Another text';
}, 1500);
