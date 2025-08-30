const button = document.querySelector('button');
const some_form = document.getElementById('form');

// some_form.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const formData = new FormData(some_form);
//   const values = formData.values();

//   for (const item of values) {
//     console.log(item);
//   }
// });

async function foo() {
  console.log('hello world');
  const formData = new FormData(some_form);
  const values = formData.values();

  // for (const item of values) {
  //   console.log(item);
  // }

  const person = { name: 'James', age: 12 };

  fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(person),
  }).then((response) => {
    console.log(response);
  });
}
