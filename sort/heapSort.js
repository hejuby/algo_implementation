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
  for (let i = Math.floor(array.length/2)-1; i >= 0; i--) {
    maxHeapify(array, i);
  }

  return array;
}

function maxHeapify(array, i) {
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
