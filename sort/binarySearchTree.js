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

  search(key) {
    let current = this.root;
    while (current.left || current.right) {
      if (current.get() === key) {
        break;
      } else if (current.get() > key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return current;
  }

  delete(key) {
    let current = this.search(key);
    let parent = current.parent;
    let isLeft = (current.get() < parent.get());
    if (!current.left && !current.right) {
      if (isLeft) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (current.left && !current.right) {
      if (isLeft) {
        parent.left = current.left;
        current.left.parent = parent;
      } else {
        parent.right = current.left;
        current.left.parent = parent;
      }
      current.left = null;
    } else if (!current.left && current.right) {
      if (isLeft) {
        parent.left = current.right;
        current.right.parent = parent;
      } else {
        parent.right = current.right;
        current.right.parent = parent;
      }
      current.right = null;
    } else {
      let submin = this.min(current.right);
      submin = this.delete(submin.get());
      if (isLeft) {
        parent.left = submin;
      } else {
        parent.right = submin;
      }
      submin.parent = parent;
      submin.left = current.left;
      submin.right = current.right;
      current.left.parent = submin;
      current.right.parent = submin;
      current.left = null;
      current.right = null;
    }
    current.parent = null;

    return current;
  }

  inorderTraverse() {
    let result = [];
    let current = this.root;
    this.inorder(current, result);

    return result;
  }

  inorder(node, result) {
    if (!this.root) { return; }
    let current = node;

    if (current.left) this.inorder(current.left, result);
    result.push(current.get());
    if (current.right) this.inorder(current.right, result);
  }

  preorderTraverse() {
    let result = [];
    let current = this.root;
    this.preorder(current, result);

    return result;
  }

  preorder(node, result) {
    if (!this.root) return;
    let current = node;

    result.push(current.get());
    if (current.left) this.preorder(current.left, result);
    if (current.right) this.preorder(current.right, result);
  }

  postorderTraverse() {
    let result = [];
    let current = this.root;
    this.postorder(current, result);

    return result;
  }

  postorder(node, result) {
    if (!this.root) return;
    let current = node;

    if (current.left) this.postorder(current.left, result);
    if (current.right) this.postorder(current.right, result);
    result.push(current.get());
  }

  min(node) {
    if (!node) return;
    let current = node;

    while (current.left || current.right) {
      current = (current.left) ? current.left : current.right;
    }

    return current;
  }

  max(node) {
    if (!node) return;
    let current = node;

    while (current.left || current.right) {
      current = (current.right) ? current.right : current.left;
    }

    return current;
  }

  nextLarger(key) {
    let current = this.search(key);
    if (current.right) {
      current = current.right;
      while (current.left) {
        current = current.left;
      }
      return current;
    } else {
      while (!current.parent) {
        if (current.parent.left === current) {
          return current.parent;
        } else {
          current = current.parent;
        }
      }
    }
  }

  nextSmaller(key) {
    let current = this.search(key);
    if (current.left) {
      current = current.left;
      while (current.right) {
        current = current.right;
      }
      return current;
    } else {
      while (!current.parent) {
        if (current.parent.right === current) {
          return current.parent;
        } else {
          current = current.parent;
        }
      }
    }
  }
}
