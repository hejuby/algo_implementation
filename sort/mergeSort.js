function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const R = mergeSort(array.splice(Math.floor(array.length/2)));
  const L = mergeSort(array);

  return newMerge(L, R);
}

function merge(L, R) {
  let cursorl = 0;
  let cursorr = 0;
  let array = [];
  for (let i = 0; i < L.length + R.length; i++) {
    if (L[cursorl] < R[cursorr]) {
      array.push(L[cursorl]);
      cursorl += 1;
      if (cursorl == L.length) {
        for (let j = cursorr; j < R.length; j++) {
          array.push(R[cursorr]);
        }
        break;
      }
    } else {
      array.push(R[cursorr]);
      cursorr += 1;
      if (cursorr == R.length) {
        for (let j = cursorl; j < L.length; j++) {
          array.push(L[cursorl]);
        }
        break;
      }
    }
  }

  return array;
}

function newMerge(L, R) {
  let cursorl = 0;
  let cursorr = 0;
  let array = [];
  while (cursorl < L.length && cursorr < R.length) {
    if (L[cursorl] < R[cursorr]) {
      array.push(L[cursorl]);
      cursorl++;
    } else {
      array.push(R[cursorr]);
      cursorr++;
    }
  }
  if (cursorl < L.length) {
    array = array.concat(L.splice(cursorl));
  } else {
    array = array.concat(R.splice(cursorr));
  }

  return array;
}
