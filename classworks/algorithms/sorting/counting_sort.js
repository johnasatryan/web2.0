const countingSort = (arr) => {
  const length = arr.length;

  let maxElem = arr[0];
  let minElem = arr[0];

  for (let i = 1; i < length; ++i) {
    if (maxElem < arr[i]) {
      maxElem = arr[i];
    }
    if (minElem > arr[i]) {
      minElem = arr[i];
    }
  }

  const range = maxElem - minElem + 1;

  const countingArray = new Array(range).fill(0);

  for (const item of arr) {
    countingArray[item - minElem]++;
  }

  for (let i = 1; i < countingArray.length; ++i) {
    countingArray[i] += countingArray[i - 1];
  }

  const newArray = new Array(length).fill(0);

  for (let i = length - 1; i >= 0; --i) {
    const elem = arr[i]; // 20

    const idx = countingArray[elem - minElem] - 1;
    newArray[idx] = elem;
    countingArray[elem - minElem]--;
  }
  return newArray;
};

const countingSortA = (arr) => {
  const length = arr.length;

  let maxElem = arr[0];
  let minElem = arr[0];

  for (let i = 1; i < length; ++i) {
    if (maxElem < arr[i]) {
      maxElem = arr[i];
    }
    if (minElem > arr[i]) {
      minElem = arr[i];
    }
  }
  const range = maxElem - minElem + 1;

  const countingArray = new Array(range).fill(0);

  for (const item of arr) {
    countingArray[item - minElem]++;
  }

  const newArray = new Array(length).fill(0);

  let k = 0;
  for (let i = 0; i < countingArray.length; ++i) {
    while (countingArray[i]--) {
      newArray[k++] = i + minElem;
    }
  }
  return newArray;
};

const arr = [];
const arr2 = [];

for (let i = 0; i < 10000000; ++i) {
  arr.push(Math.floor((Math.random() + 1) * (1000 - 100)));
  arr2.push(Math.floor((Math.random() + 1) * (1000 - 100)));
}

const start = Date.now();
let s1 = countingSort(arr);

console.log('Time: ', `${Date.now() - start}ms`);
console.log('zzveli array', s1);

const start2 = Date.now();
let s2 = countingSortA(arr2);

console.log('Time: ', `${Date.now() - start2}ms`);
console.log('zzveli array', s2);
