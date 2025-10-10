class Deque {
  #map = null;
  constructor(initialBucket = 4, initialBlockSize = 8) {
    if (initialBucket < 2) {
      throw new Error('Needed at least 2 buckets');
    }
    const mid = Math.floor(initialBucket / 2);
    this.#map = new Array(initialBucket).fill(null);
    this.blockSize = initialBlockSize;
    this.headBlock = mid - 1;
    this.headIndex = initialBlockSize - 1;
    this.tailBlock = mid;
    this.tailIndex = 0;
    this.size = 0;
  }

  // helper

  _copy_pos(b, i) {
    return { block: b, index: i };
  }

  _write(p, value) {
    this._ensureBucketExists(p.block);
    this.#map[p.block][p.index] = value;
  }
  _read(p) {
    this._ensureBucketExists(p.block);
    return this.#map[p.block][p.index];
  }

  _resize() {
    const old = this.#map;
    const newLength = old.length * 2;

    const next = new Array(newLength).fill(null);
    const offset = Math.floor((newLength - old.length) / 2);

    for (let i = 0; i < old.length; ++i) {
      next[i + offset] = old[i];
    }
    this.#map = next;
    this.headBlock += offset;
    this.tailBlock += offset;
    return offset;
  }
  _inc(p) {
    if (p.index === this.blockSize - 1) {
      if (p.block > this.#map.length - 1) {
        const offset = this._resize();
        p.block += offset;
      }
      ++p.block;
      p.index = 0;
    } else {
      ++p.index;
    }
  }
  _dec(p) {
    if (p.index === 0) {
      if (p.block === 0) {
        const offset = this._resize();
        p.block += offset;
      }
      --p.block;
      p.index = this.blockSize - 1;
    } else {
      --p.index;
    }
  }

  _ensureBucketExists(block) {
    const bucket = this.#map[block];
    if (!bucket) {
      this.#map[block] = new Array(this.blockSize).fill(null);
    }
  }

  _front() {
    const p = this._copy_pos(this.headBlock, this.headIndex);
    this._inc(p);

    // arithmetic
  }

  // interface

  at(index) {
    if (index < 0 || index >= this.size) throw new Error();

    const { block, p_index } = this._copy_pos(this.headBlock, this.headIndex);
    p_index++;

    p_index += index;

    this.#map.length / p_index;
  }
  push_back(value) {
    const p = this._copy_pos(this.tailBlock, this.tailIndex);
    this._write(p, value);
    this._inc(p);
    this.tailBlock = p.block;
    this.tailIndex = p.index;
    ++this.size;
  }

  push_front(value) {
    const p = this._copy_pos(this.headBlock, this.headIndex);
    this._write(p, value);
    this._dec(p);
    this.headBlock = p.block;
    this.headIndex = p.index;
    ++this.size;
  }
  visualize() {
    for (let i = 0; i < this.#map.length; ++i) {
      const bucket = this.#map[i];
      if (!bucket) continue;

      const display = bucket
        .map((elem) => (elem === null ? '.' : elem))
        .join(' ');
      console.log(`Bucket_${i}: [ ${display}]`);
    }
  }
  [Symbol.iterator]() {}
}
const dq = new Deque();

try {
  for (let i = 0; i < 6; ++i) {
    dq.push_back(i + 1);
  }

  for (let i = 0; i < 6; ++i) {
    dq.push_front(i + 1);
  }
} catch (err) {
  console.log(err.message);
}
dq.visualize();
dq.at();
