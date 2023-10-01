function countingSort(array) {
  let auxArray = [];
  let ret = new Array(array.length);
  for (let i  = 0; i < array.length; i++) {
    if (auxArray[array[i]] === undefined) {
      auxArray[array[i]] = 0;
    }
    auxArray[array[i]] += 1;
  }
  if (!auxArray[0]) auxArray[0] = 0;
  for (let i = 1; i < auxArray.length; i++) {
    if (auxArray[i]) {
      auxArray[i] = auxArray[i] + auxArray[i-1];
    } else {
      auxArray[i] = auxArray[i-1];
    }
  }
  for (let i = array.length-1; i >= 0; i--) {
    ret[auxArray[array[i]]-1] = array[i];
    auxArray[array[i]] -= 1;
  }

  return ret;
}
