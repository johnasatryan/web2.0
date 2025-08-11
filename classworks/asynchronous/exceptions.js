const subscript = (arr, index) => {
  if (!arr[index]) {
    throw new Error('Normal lezu karar liner');
  }
  return arr[index];
};

const arr = [1, 3, 4, 2];

console.log(arr[100]);
 console.log(subscript(arr, 100));
try {
  console.log(subscript(arr, 100));
} catch (err) {
  console.log(err.message);
}

console.log('tsragri katarumy sharunakvum e');
