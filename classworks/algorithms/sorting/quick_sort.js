const swap = (a, i, j) => {
  const t = a[i];
  a[i] = a[j];
  a[j] = t;
};

const medianOfThree = (a, low, high) => {
  const mid = low + ((high - low) >> 1);
  if (a[low] > a[mid]) swap(a, low, mid);
  if (a[low] > a[high]) swap(a, low, high);
  if (a[mid] > a[high]) swap(a, mid, high);
  return mid; // a[mid] is median of a[low], a[mid], a[high]
};

const partition = (a, low, high) => {
  const pivotIndex = medianOfThree(a, low, high);
  const pivot = a[pivotIndex];
  swap(a, pivotIndex, low);

  let i = low + 1;
  let j = high;

  while (i <= j) {
    while (i <= high && a[i] <= pivot) i++;
    while (j >= low && a[j] > pivot) j--;
    if (i < j) swap(a, i, j);
  }

  swap(a, low, j); // pivot to its final spot
  return j; // pivot index
};

const quickSort = (a, low = 0, high = a.length - 1) => {
  if (low < high) {
    const p = partition(a, low, high);
    quickSort(a, low, p - 1);
    quickSort(a, p + 1, high);
  }
  return a;
};

// Demo
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSort(arr.slice())); // [3, 9, 10, 27, 38, 43, 82]
