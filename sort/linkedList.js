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
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      const current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);
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
    return current;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }
}
