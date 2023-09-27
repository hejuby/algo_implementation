class Heap {
  constructor(array) {
    this.array = array;
  }

  printHeap() {
    console.log(this.array);
  }

  insert(x) {
    this.array.push(x);
  }

  max() {
    this.buildMaxHeap();

    return this.array[0];
  }

  extractMax() {
    this.buildMaxHeap();

    return this.array.shift();
  }

  maxHeapify(i) {
    if (i*2+1 > this.array.length-1) {
      return;
    } else if (i*2+1 == this.array.length-1) {
      if (this.array[i] < this.array[i*2+1]) {
        swapNumbers(this.array, i, i*2+1);
      }
    } else {
      if (this.array[i] < this.array[i*2+1] || this.array[i] < this.array[i*2+2]) {
        if (this.array[i*2+1] > this.array[i*2+2]) {
          swapNumbers(this.array, i, i*2+1);
          this.maxHeapify(i*2+1);
        } else {
          swapNumbers(this.array, i, i*2+2);
          this.maxHeapify(i*2+2);
        }
      }
    }
  }

  buildMaxHeap() {
    for (let i = Math.floor(this.array.length/2)-1; i >= 0; i--) {
      this.maxHeapify(i);
    }
  }

  sort() {
    let array = [];
    this.buildMaxHeap();
    while (this.array.length > 1) {
      swapNumbers(this.array, 0, this.array.length-1);
      array.unshift(this.array.pop());
      this.maxHeapify(0);
    }
    array.unshift(this.array.pop());
    this.array = array;
  }
}

function swapNumbers(array, i, j) {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}
