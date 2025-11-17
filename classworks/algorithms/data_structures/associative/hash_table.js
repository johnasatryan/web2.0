const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;

  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const nextPrime = (num) => {
  let n = num + 1;
  while (!isPrime(n)) n++;
  return n;
};

class HashTable {
  constructor(initialCapacity = 11, maxLoadFactor = 1.0) {
    if (!isPrime(initialCapacity)) {
      initialCapacity = nextPrime(initialCapacity);
    }
    this.bucketCount = initialCapacity;
    this.size = 0;
    this.maxLoadFactor = maxLoadFactor;
    this.buckets = new Array(this.bucketCount).fill(null).map(() => []);
  }

  _hash(key) {
    return key % this.bucketCount;
  }

  _hash_string(key) {
    const PRIME = 31;
    let total = 0;
    for (let i = 0; i < key.length; ++i) {
      const index = key.charCodeAt(i) - 96;
      total += (index * total + PRIME) % this.bucketCount;
    }
    return total;
  }

  loadFactor() {
    return this.size / this.bucketCount;
  }

  set(key, value) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair.key === key) {
        pair.key = value;
      }
    }
    bucket.push({ key, value });
    this.size++;

    if (this.loadFactor() > this.maxLoadFactor) {
      this._rehash();
    }
  }

  _rehash() {
    const oldBuckets = this.buckets;
    const newSize = nextPrime(this.bucketCount * 2);
    this.bucketCount = newSize;
    this.buckets = new Array(newSize).fill(null).map(() => []);
    for (const bucket of oldBuckets) {
      for (const { key, value } of bucket) {
        this.set(key, value);
      }
    }
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (const pair of bucket) {
      if (pair.key === key) {
        return pair.value;
      }
    }
    return undefined;
  }

  has(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (const pair of bucket) {
      if (pair.key === key) {
        return true;
      }
    }
    return false;
  }
  *[Symbol.iterator]() {
    for (const bucket of this.buckets) {
      for (const { key, value } of bucket) {
        yield [key, value];
      }
    }
  }
}

const ht = new HashTable(10);

console.log(ht._hash_string('abc'));
console.log(ht._hash_string('bac'));
