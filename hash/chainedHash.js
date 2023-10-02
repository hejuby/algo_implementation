class Node {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(key) {
    let node = new Node(key);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  find(key) {
    let current = this.head;
    while (current.key !== key) {
      current = current.next;
    }
    return current;
  }

  delete(key) {
    let current = this.head;
    if (this.head.key === key) {
      this.head = null;
      return current;
    } else {
      while (current.next) {
        if (current.next.key === key) break;
        current = current.next;
      }
      let deleted = current.next;
      current.next = deleted.next;
      deleted.next = null;
      return deleted;
    }
  }
}

class HashTable {
  constructor(m) {
    this.m = m;
    this.table = new Array(m).fill().map(() => new LinkedList());
  }

  insert(key, value) {
    return this.table[this.hash(key)].insert(value);
  }

  find(key, value) {
    return this.table[this.hash(key)].find(value);
  }

  delete(key, value) {
    return this.table[this.hash(key)].delete(value);
  }

  // Division hash
  hash(key) {
    return key % this.m;
  }
}
