function insertionSort(array) {
  let cursor;
  for (let i = 1; i < array.length; i++) {
    cursor = i;
    for (let j = cursor-1; j >= 0; j--) {
      if (array[cursor] < array[j]) {
        swapNumbers(array, cursor, j);
        cursor -= 1;
      } else {
        continue;
      }
    }
  }

  return array;
}

function swapNumbers(array, i, j) {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}
