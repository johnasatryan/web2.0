function isSorted(arr) {
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

function medianOfThree(arr, low, high) {
  console.log(low, high);
  const mid = Math.floor((low + high) / 2);
  const a = arr[low],
    b = arr[mid],
    c = arr[high - 1];
  if ((a - b) * (c - a) >= 0) return low;
  if ((b - a) * (c - b) >= 0) return mid;
  return high;
}

const swap = (arr, left, right) => {
  [arr[left], arr[right]] = [arr[right], arr[left]];
};

function randomPivot(low, high) {
  return low + Math.floor(Math.random() * (high - low));
}

function partition(arr, low, high) {
  // const pivotIndex = low; first
  // const pivotIndex = high; last

  const pivotIndex = medianOfThree(arr, low, high);

  const pivot = arr[pivotIndex];
  let i = low - 1;
  let j = high;

  while (i < j) {
    do {
      ++i;
    } while (i < high && arr[i] <= pivot);

    do {
      --j;
    } while (j > low && arr[j] > pivot);

    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, j, low);
  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi);
    quickSort(arr, pi + 1, high);
  }
}

const arr = [9, 6, 7, 5, 3, 10, 16, 12, 15];
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr2 = [];
for (let i = 1; i < Math.pow(10, 3); ++i) {
  arr2.push(Math.floor((Math.random() + 1) * i));
}

const start = Date.now();
quickSort(arr2, 0, arr2.length);

console.log(`QuickSort: Pivot usage first element -> ${Date.now() - start}ms`);

// const start1 = Date.now();
// quickSort(arr2, 0, arr2.length);

// console.log(`QuickSort: Pivot usage first element -> ${Date.now() - start1}ms`);

// console.log(arr2);
