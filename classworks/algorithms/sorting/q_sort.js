// partition.js
// Lomuto partition scheme
export function lomutoPartition(arr, low, high, pivotIndex) {
  const pivotValue = arr[pivotIndex];
  [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]]; // move pivot to end
  let storeIndex = low;
  for (let i = low; i < high; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
      storeIndex++;
    }
  }
  [arr[storeIndex], arr[high]] = [arr[high], arr[storeIndex]]; // move pivot to final place
  return storeIndex;
}

// Hoare partition scheme
export function hoarePartition(arr, low, high, pivotIndex) {
  const pivot = arr[pivotIndex];
  let i = low - 1;
  let j = high + 1;
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);
    if (i >= j) return j;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Pivot selection helpers
function firstPivot(low) {
  return low;
}
function lastPivot(high) {
  return high;
}
function randomPivot(low, high) {
  return low + Math.floor(Math.random() * (high - low + 1));
}


// quicksort.js
import { lomutoPartition, hoarePartition } from './partition.js';

export function quicksort(arr, options = { pivot: 'first', scheme: 'lomuto' }) {
  const a = [...arr];
  const { pivot, scheme } = options;

  function sort(low, high) {
    if (low < high) {
      // choose pivot index
      let pivotIndex;
      if (pivot === 'first') pivotIndex = low;
      else if (pivot === 'last') pivotIndex = high;
      else if (pivot === 'random') pivotIndex = randomPivot(low, high);
      else if (pivot === 'median3') pivotIndex = medianOfThree(a, low, high);
      else pivotIndex = low;

      // partition
      let p;
      if (scheme === 'lomuto') {
        p = lomutoPartition(a, low, high, pivotIndex);
        sort(low, p - 1);
        sort(p + 1, high);
      } else {
        p = hoarePartition(a, low, high, pivotIndex);
        sort(low, p);
        sort(p + 1, high);
      }
    }
  }

  sort(0, a.length - 1);
  return a;
}

// Convenience wrappers
export const qsFirst = (arr) =>
  quicksort(arr, { pivot: 'first', scheme: 'lomuto' });
export const qsLast = (arr) =>
  quicksort(arr, { pivot: 'last', scheme: 'lomuto' });
export const qsRandom = (arr) =>
  quicksort(arr, { pivot: 'random', scheme: 'lomuto' });
export const qsMedian3 = (arr) =>
  quicksort(arr, { pivot: 'median3', scheme: 'lomuto' });

// Example usage
const arr = [3, 6, 8, 10, 1, 2, 1];
console.log(qsFirst(arr));
console.log(qsRandom(arr));
