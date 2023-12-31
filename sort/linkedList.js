class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  prepend(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  delete(key) {
    if (key < 0 || key >= this.size) {
      return;
    }
    let current = this.head;
    let previous;
    if (key == 0) {
      this.head = this.head.next;
    } else {
      for (let i = 0; i < key; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  length() {
    return this.size;
  }

  get(key) {
    if (key < 0 || key >= this.size) {
      return;
    }
    let current = this.head;
    for (let i = 0; i < key; i++) {
      current = current.next;
    }
    return current.data;
  }
}
