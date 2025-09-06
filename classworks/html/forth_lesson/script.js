fetch('http://hasce', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data),
});
