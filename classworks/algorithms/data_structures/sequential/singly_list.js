const randomArrayGenerator = require('../helpers');

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SinglyList {
  #head = null;
  #size = 0;

  constructor(iterables) {
    if (iterables === undefined) return;
    if (iterables && typeof iterables[Symbol.iterator] !== 'function') {
      iterables = new Array(iterables);
    }
    for (const item of iterables) {
      this.push_back(item);
    }
  }

  push_back(value) {
    const n = new Node(value);

    if (!this.#head) {
      this.#head = n;
      ++this.#size;
      return;
    }

    let current = this.#head;
    while (current.next) {
      current = current.next;
    }
    current.next = n;
    ++this.#size;
  }

  print() {
    let str = '';

    let current = this.#head;

    while (current) {
      str += current.data + '->';
      current = current.next;
    }
    str += null;
    console.log(str);
  }

  _merge(left, right, cmp) {
    if (!left) return right;
    if (!right) return left;

    let dummy = new Node(null);

    let current = dummy;

    while (left && right) {
      if (cmp(left.data, right.data) <= 0) {
        current.next = left;
        left = left.next;
      } else {
        current.next = right;
        right = right.next;
      }
      current = current.next;
    }

    if (left) {
      current.next = left;
    }
    if (right) {
      current.next = right;
    }
    return dummy.next;
  }
  _merge_sort(head, cmp) {
    if (!head || !head.next) return head;

    let fast = head.next;
    let slow = head;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }

    let mid = slow.next;
    slow.next = null;

    const left = this._merge_sort(head, cmp);
    const right = this._merge_sort(mid, cmp);

    return this._merge(left, right, cmp);
  }

  sort(
    cmp = function (a, b) {
      return a - b;
    },
  ) {
    if (this.#size < 2) return;
    this.#head = this._merge_sort(this.#head, cmp);
  }
}

// const arr = randomArrayGenerator(1, 100);

// const ls = new SinglyList(arr);
// ls.print();

// ls.sort();

// ls.print();

Object.prototype.toString = function () {
  return `{${this.name}:${this.age}}`;
};
const persons = [
  { name: 'Bob', age: 32 },
  { name: 'Alice', age: 12 },
  { name: 'James', age: 24 },
  { name: 'Tom', age: 41 },
  { name: 'Ben', age: 5 },
];

const ls = new SinglyList(persons);

ls.print();

ls.sort(function (a, b) {
  return a.age - b.age;
});
ls.print();
