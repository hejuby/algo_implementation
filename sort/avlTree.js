class Node {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right  = null;
    this.height = null;
  }

  insert(node) {
    if (node.key < this.key) {
      if (this.left) {
        this.left.insert(node);
      } else {
        this.left = node;
        node.parent = this;
      }
    } else {
      if (this.right) {
        this.right.insert(node)
      } else {
        this.right = node;
        node.parent = this;
      }
    }
  }

  find(key) {
    if (key === this.key) {
      return this;
    } else if (key < this.key) {
      if (!this.left) return null;
      return this.left.find(key);
    } else {
      if (!this.right) return null;
      return this.right.find(key);
    }
  }

  findMin() {
    let current = this;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  findMax() {
    let current = this;
    while (current.right) {
      current = current.right;
    }
    return current;
  }

  nextLarger() {
    if (this.right) {
      return this.right.findMin();
    } else {
      let current = this;
      while (current.parent) {
        if (current.parent.left === current) {
          return current.parent;
        } else {
          current = current.parent;
        }
      }
    }
  }

  nextSmaller() {
    if (this.left) {
      return this.left.findMax();
    } else {
      let current = this;
      while (current.parent) {
        if (current.parent.right === current) {
          return current.parent;
        } else {
          current = current.parent;
        }
      }
    }
  }

  delete() {
    if (!this.left || !this.right) {
      if (this === this.parent.left) {
        this.parent.left = (this.left) ? this.left : this.right;
        if (this.parent.left) {
          this.parent.left.parent = this.parent;
        }
      } else {
        this.parent.right = (this.left) ? this.left : this.right;
        if (this.parent.right) {
          this.parent.right.parent = this.parent;
        }
      }
    } else {
      let sub = this.nextLarger();
      [this.key, sub.key] = [sub.key, this.key];
      sub.delete();
    }
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    let node = new Node(key);
    if (!this.root) {
      this.root = node;
    } else {
      this.root.insert(node);
    }
  }

  find(key) {
    return this.root.find(key);
  }

  findMin() {
    return this.root.findMin();
  }

  findMax() {
    return this.root.findMax();
  }

  nextLarger(key) {
    return this.find(key).nextLarger();
  }

  nextSmaller(key) {
    return this.find(key).nextSmaller();
  }

  delete(key) {
    let node = this.find(key);
    if (!node) {
      return null;
    } else if (node === this.root) {
      let tmpRoot = new Node(key);
      tmpRoot.left = this.root;
      this.root.parent = tmpRoot;
      let ret = this.root.delete();
      this.root = tmpRoot.left;
      return ret;
    } else {
      return node.delete();
    }
  }

  checkBalance() {

  }
}