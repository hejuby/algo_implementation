class Node {
  constructor(key) {
    this.key = key;
  }

  get() {
    return this.key;
  }

  delete() {
    this.key = "deleted";
  }
}

class HashTable {
  // open adressing using javascript array
  constructor(m) {
    this.m = m;
    this.size = 0;
    this.table = new Array(m);
  }

  insert(key) {
    this.insertTo(this.table, key);
    if (this.size > this.m/2) {
      this.reallocate();
    }
  }

  insertTo(table, key) {
    for (let i = 1; i < this.m+1; i++) {
      if (table[this.hash(key, i)] && (table[this.hash(key, i)].get() !== "deleted")) {
        continue;
      } else {
        table[this.hash(key, i)] = new Node(key);
        this.size++;
        break;
      }
    }
  }

  search(key) {
    for (let i = 1; i < this.m+1; i++) {
      if (this.table[this.hash(key, i)]) {
        if (this.table[this.hash(key, i)] === key) {
          return this.hash(key, i);
        } else {
          continue;
        }
      } else {
        return null;
      }
    }
  }

  delete(key) {
    const index = this.search(key);
    if (index) {
      this.table[index].delete();
      size--;
      return key;
    }
    return null;
  }

  hash(key, i) {
  // double hashing
    return (this.hash1(key) + i*this.hash2(key)) % this.m;
  }

  hash1(key) {
    return key % this.m;
  }

  hash2(key) {
    // random prime number 7
    return 7 - (key % 7);
  }

  reallocate() {
    let newArray = new Array(this.m*2);
    for (let i = 0; i < this.m; i++) {
      if (this.table[i] && this.table[i].get() !== "deleted") this.insertTo(newArray, this.table[i].get());
    }
    this.size /= 2;
    this.table = newArray;
    this.m *= 2;
  }
}
