function heapSort(array) {
  const retArray = Heap(array);
  
  return retArray.heapSort();
}

function Heap(array) {
  this.array = array;

  function printHeap() {
    console.log(this.array);
  }

  function insert(x) {
    this.array.push(x);
  }

  function max() {
    this.heapSort();

    return this.array[0];
  }

  function extractMax() {
    this.heapSort();

    return this.array.shift();
  }

  function maxHeapify(i) {
    let tmp;
    if (i*2 > this.array.length) {
      return this.array;
    } else {
      if (this.array[i] >= this.array[i*2] && this.array[i] >= this.array[i*2+1]) {
        return this.array;
      } else {
        if (this.array[i*2] > this.array[i*2+1]) {
          swapNumbers(this.array, i, i*2);
          this.maxHeapify(i*2);
        } else {
          swapNumbers(this.array, i, i*2+1);
          this.maxHeapify(i*2+1);
        }
      }
    }
  }

  function buildMaxHeap() {

  }

  function heapSort() {

  }
}

function heapSort(array) {
  const ret = [];
  buildMaxHeap(array);
  while (array.length > 1) {
    swapNumbers(array, 0, array.length-1);
    ret.unshift(array.pop());
    maxHeapify(array, 0);

  }
  ret.unshift(array.pop());

  return ret;
}

function buildMaxHeap(array) {
  for (let i = array.length/2-1; i >= 0; i--) {
    maxHeapify(array, i);
  }

  return array;
}

function maxHeapify(array, i) {
  let tmp;
  if (i*2+1 >= array.length) {
    return array;
  } else if (i*2+1 == array.length - 1) {
    if (array[i] >= array[i*2+1]) {
      return array;
    } else {
      swapNumbers(array, i, i*2+1);
      return array;
    }
  } else {
    if (array[i] >= array[i*2+1] && array[i] >= array[i*2+2]) {
      return array;
    } else {
      if (array[i*2+1] > array[i*2+2]) {
        swapNumbers(array, i, i*2+1);
        return maxHeapify(array, i*2+1);
      } else {
        swapNumbers(array, i, i*2+2);
        return maxHeapify(array, i*2+2);
      }
    }
  }
}

function swapNumbers(array, i, j) {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}
