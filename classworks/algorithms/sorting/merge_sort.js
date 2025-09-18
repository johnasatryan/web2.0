// Merge Sort

const merge = (arr, low, mid, high) => {
  const a1 = arr.slice(low, mid + 1);
  const a2 = arr.slice(mid + 1, high + 1);

  let i = 0;
  let j = 0;
  let k = low;

  while (i < a1.length && j < a2.length) {
    if (a1[i].age < a2[j].age) {
      arr[k++] = a1[i++];
    } else {
      arr[k++] = a2[j++];
    }
  }

  while (i < a1.length) {
    arr[k++] = a1[i++];
  }

  while (j < a2.length) {
    arr[k++] = a2[j++];
  }
};

const mergeSort = (arr, low, high) => {
  if (low >= high) return; // if(low < high)
  const mid = Math.floor((low + high) / 2);

  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);

  merge(arr, low, mid, high);
};

// mergeSort(arr, 0, arr.length - 1);
// console.log(arr);

const persons = [
  {
    name: 'Alice',
    age: 34,
  },
  {
    name: 'Tony',
    age: 34,
  },
  {
    name: 'James',
    age: 24,
  },

  {
    name: 'Bob',
    age: 23,
  },
  {
    name: 'Entony',
    age: 5,
  },

  {
    name: 'Tedd',
    age: 12,
  },
];

mergeSort(persons, 0, persons.length - 1);
console.log(persons);
