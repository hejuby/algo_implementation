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

  traverse() {
    let current = this.head;
    let ret = [];
    while (current.next) {
      ret.push(current);
      current = current.next;
    }
    return ret;
  }
}

class HashTable {
  constructor(m) {
    this.m = m;
    this.size = 0;
    this.table = new Array(m).fill().map(() => new LinkedList());
  }

  insert(key) {
    this.size++;
    if (this.size === this.m) {
      this.m *= 2;
      this.reallocate(m);
    }
    return this.insertTo(this.table, key);
  }

  insertTo(table, key) {
    return table[this.hash(key)].insert(key);
  }

  find(key) {
    return this.table[this.hash(key)].find(key);
  }

  delete(key) {
    const ret = this.table[this.hash(key)].delete(key);
    if (ret) this.size--;
    if (this.size < (m/4)) {
      this.m = Math.floor(this.m/2);
      this.reallocate(m);
    }
    return ret;
  }

  // Division hash
  hash(key) {
    return key % this.m;
  }

  reallocate(m) {
    let newTable = new Array(m).fill().map(() => new LinkedList());
    for (let i = 0; i < this.size; i++) {
      let bucket = this.table[i].traverse();
      for (const item in bucket) {
        this.insertTo(newTable, item.key);
      }
    }
    this.table = newTable;
  }
}
