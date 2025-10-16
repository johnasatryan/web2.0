const Queue = require('../sequential/queue');

class TreeNode {
  constructor(data = 0) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  /* ---------------- Recursive helper ---------------- */
  _insert(node, data) {
    if (node === null) {
      return new TreeNode(data);
    }
    if (data < node.data) {
      node.left = this._insert(node.left, data);
    }
    // Go right
    else if (data > node.data) {
      node.right = this._insert(node.right, data);
    }
    return node;
  }

  _find_min(node) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }

  _remove(node, key) {
    if (!node) return node;

    if (key < node.data) {
      node.left = this._remove(node.left, key);
    } else if (key > node.data) {
      node.right = this._remove(node.right, key);
    } else {
      if (!node.right) {
        return node.left;
      } else if (!node.left) {
        return node.right;
      } else {
        const min = this._find_min(node.right);
        this.remove(min.data);
        node.data = min.data;
      }
    }
    return node;
  }

  _inorder(node, arr) {
    if (!node) return;
    this._inorder(node.left, arr);
    arr.push(node.data);
    this._inorder(node.right, arr);
  }

  /* ---------------- Public API ---------------- */

  // insert(data) {
  //   this.root = this._insert(this.root, data);
  // }

  add(data) {
    if (!this.root) {
      this.root = new TreeNode(data);
      return true;
    }
    let cur = this.root;
    for (;;) {
      if (data < cur.data) {
        if (!cur.left) {
          cur.left = new TreeNode(data);
          return true;
        }
        cur = cur.left;
      } else if (data > cur.data) {
        if (!cur.right) {
          cur.right = new TreeNode(data);
          return true;
        }
        cur = cur.right;
      } else {
        return false;
      }
    }
  }

  get_height() {
    if (!this.root) return 0;
    let height = 0;
    const q = new Queue(this.root);

    while (!q.isEmpty()) {
      const levelSize = q.size();
      height++;
      for (let i = 0; i < levelSize; i++) {
        const node = q.dequeue();
        if (node.left) q.enqueue(node.left);
        if (node.right) q.enqueue(node.right);
      }
    }
    return height;
  }

  remove(key) {
    this.root = this._remove(this.root, key);
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
  // left-root-right
  // inorder() {
  //   if (!this.root) return;
  //   let current = this.root;
  //   const stack = [];
  //   let out = '';

  //   while (current || stack.length) {
  //     while (current) {
  //       stack.push(current);
  //       current = current.left;
  //     }
  //     current = stack.pop();
  //     out += current.data + ' ';
  //     current = current.right;
  //   }
  //   console.log(out);
  // }

  inorder() {
    const arr = [];
    this._inorder(this.root, arr);

    console.log(arr);
  }

  // root-left-right
  preorder() {
    if (!this.root) return;
    const stack = [this.root];
    let out = '';

    while (stack.length) {
      const node = stack.pop();
      out += node.data + ' ';
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }

    console.log(out);
  }

  // left-right-root
  postorder() {}
}

const bst = new BST();

[50, 30, 70, 20, 40, 60, 80, 35, 45, 55, 65].forEach((v) => bst.add(v));
// console.log('Level order: ');
// bst.level_order();
// console.log('Inorder order: ');
// bst.inorder();

// console.log('Prorder order: ');
// bst.preorder();

bst.level_order();
bst.remove(35);
bst.level_order();
bst.remove(45);
bst.level_order();
bst.add(10);
bst.remove(20);
bst.level_order();

bst.remove(50);
bst.level_order();
