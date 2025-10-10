class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  #head = null;
  #tail = null;
  #size = 0;

  #MAGIC_ZERO = 0;

  constructor(iterables) {
    if (iterables === undefined) return;

    if (iterables && typeof iterables[Symbol.iterator] !== 'function') {
      iterables = new Array(iterables);
    }
    for (const item of iterables) {
      this.push_back(item);
    }
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === this.#MAGIC_ZERO;
  }
  clear() {
    this.#head = this.#tail = null;
    this.#size = 0;
  }

  push_front(value) {
    const n = new Node(value);

    if (!this.#size) {
      this.#tail = n;
    } else {
      n.next = this.#head;
      this.#head.prev = n;
    }
    this.#head = n;
    ++this.#size;
  }

  push_back(value) {
    const n = new Node(value);

    if (!this.#size) {
      this.#head = n;
      this.#tail = n;
    } else {
      n.prev = this.#tail;
      this.#tail.next = n;
    }
    this.#tail = n;
    ++this.#size;
  }

  pop_front() {
    if (!this.#size) {
      return null;
    }
    const n = this.#head.data;
    if (this.#size > 1) {
      this.#head = this.#head.next;
    } else {
      this.#head = this.#tail = null;
    }
    --this.#size;
    return n;
  }

  pop_back() {}

  front() {}
  back() {}

  at(index) {}

  insert(index, value) {}
  erase(index) {}
  remove(value, equals) {}
  reverse() {}
  sort() {
    if (this.#size < 2) return;
    this.#head = this._merge_sort(this.#head);
  }

  _merge(left, right) {
    if (!left) return right;
    if (!right) return left;
  }

  _merge_sort(head) {
    if (!head || !head.next) return head;
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  }
  print() {
    let current = this.#head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList([10, 5, 12, 53, 23, 4, 1, 8]);

list.sort();
