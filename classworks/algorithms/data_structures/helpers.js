function randomArrayGenerator(start, end) {
  const arr = [];

  for (let i = 0; i < end; ++i) {
    arr.push(Math.floor(Math.random() * (end - start + 1))) + start;
  }
  return arr;
}

module.exports = randomArrayGenerator;
