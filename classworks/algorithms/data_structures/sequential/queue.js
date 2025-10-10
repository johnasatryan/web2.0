class Queue {
  #capacity = null;
  #buffer = null;
  #front = null;
  #rear = null;
  #size = null;
  constructor(capacity = 8) {
    this.#buffer = new Array(capacity);
    this.#capacity = capacity;
    this.#front = 0;
    this.#rear = 0;
    this.#size = 0;
  }

  isEmpty() {
    return this.#size === 0;
  }

  isFull() {
    return this.#size === this.#capacity;
  }

  enqueue(value) {
    if (this.isFull()) throw new Error('Queue is full');
    this.#buffer[this.#rear] = value;
    this.#rear = (this.#rear + 1) % this.#capacity;
    ++this.#size;
  }

  dequeue() {
    const value = this.#buffer[this.#front];
    this.#buffer[this.#front] = null;
    this.#front = (this.#front + 1) % this.#capacity;
    --this.#size;
    return value;
  }

  print() {
    let out = '';

    for (let i = 0; i < this.#size; ++i) {
      const index = (this.#front + i) % this.#capacity;
      out += this.#buffer[index];
      out += i === this.#size - 1 ? '' : '->';
    }
    console.log(out);
  }
}

const queue = new Queue(5);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print();
queue.dequeue();
queue.print();
 