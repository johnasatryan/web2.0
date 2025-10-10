class DArray {
  #size = 0;
  #capacity = 0;
  #arr = null;
  #CAP_EXPONENT = 2;

  constructor(cap) {
    if (cap <= 0) return;
    this.#capacity = cap;
    this.#arr = new Uint32Array(cap);
  }

  resize(new_cap, fill = 0) {
    const tmp = new Uint32Array(new_cap);
    for (let i = 0; i < this.#size; ++i) {
      tmp[i] = this.#arr[i];
    }

    for (let i = this.#size; i < new_cap; ++i) {
      tmp[i] = fill;
    }
    this.#capacity = new_cap;

    this.#arr = tmp;
  }

  push_back(elem) {
    if (this.#size === this.#capacity) {
      this.resize(this.#capacity * this.#CAP_EXPONENT);
    }
    this.#arr[this.#size++] = elem;
  }

  at(index) {
    if (index < 0 || index >= this.#size) {
      throw new Error('Out of range');
    }
    return this.#arr[index];
  }

  // erase(pos) {
  //   if (pos < 0 || pos >= this.#size) {
  //     throw new Error('Out of range');
  //   }
  //   const tmp = new Uint32Array(this.#capacity);
  //   let j = 0;
  //   for (let i = 0; i < this.#size; ++i) {
  //     if (i !== pos) {
  //       tmp[j++] = this.#arr[i];
  //     }
  //   }
  //   this.#arr = tmp;
  //   this.#size--;
  // }

  erase(pos) {
    if (pos < 0 || pos >= this.#size) {
      throw new Error('Out of range');
    }

    for (let i = pos; i < this.#size - 1; ++i) {
      this.#arr[i] = this.#arr[i + 1];
    }
    this.#size--;
  }
  [Symbol.iterator]() {
    const collection = this.#arr;
    const collection_length = this.#size;
    let index = 0;
    return {
      next() {
        if (index < collection_length) {
          return {
            value: collection[index++],
            done: false,
          };
        }
        return { value: undefined, done: true };
      },
    };
  }
}

const arr = new DArray(5);
arr.push_back(4);
arr.push_back(10);
arr.push_back(3);
arr.push_back(4);
arr.push_back(5);
arr.push_back(20);

console.log(...arr);


console.log(...arr);
