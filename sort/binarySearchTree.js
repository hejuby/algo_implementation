class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  get() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (!newNode.parent) {
      if (current.get() > newNode.get()) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          newNode.parent = current;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          newNode.parent = current;
        }
      }
    }
  }
}
