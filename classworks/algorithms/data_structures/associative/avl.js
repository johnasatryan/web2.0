const Queue = require('../sequential/queue');

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVL {
  constructor(value) {
    if (value === undefined || value === null) {
      this.root = null;
      return;
    }
    this.root = new Node(value);
  }

  // private helpers

  _get_height(node) {
    return node ? node.height : 0;
  }

  _update(node) {
    return (
      1 + Math.max(this._get_height(node.left), this._get_height(node.right))
    );
  }

  _bf(node) {
    return this._get_height(node.left) - this._get_height(node.right);
  }

  _right_rotate(node) {
    let newRoot = node.left;
    node.left = null;
    newRoot.right = node;

    newRoot.height = this._update(newRoot);
    node.height = this._update(node);
    return newRoot;
  }

  _insert(node, value) {
    if (!node) {
      return new Node(value);
    }

    if (value < node.data) {
      node.left = this._insert(node.left, value);
    } else if (value > node.data) {
      node.right = this._insert(node.right, value);
    } else {
      return node;
    }

    node.height = this._update(node);
    const bf = this._bf(node);

    if (bf > 1) {
      node = this._right_rotate(node);
    }
    return node;
  }
  // public interface

  insert(value) {
    this.root = this._insert(this.root, value);
  }

  level_order() {
    if (!this.root) return;
    const q = new Queue(1000);
    let out = '';
    q.enqueue(this.root);

    while (!q.isEmpty()) {
      const level = q.size();
      for (let i = 0; i < level; ++i) {
        const node = q.dequeue();
        out += node.data + ' ';
        if (node.left) q.enqueue(node.left);
        if (node.right) q.enqueue(node.right);
      }
    }
    console.log(out);
  }
}

const avl = new AVL();

avl.insert(30);
avl.insert(20);
avl.insert(10);
avl.insert(5);
avl.insert(11);
// avl.insert(5);

avl.level_order();
