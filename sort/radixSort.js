function radixSort(array) {
  let max = getBase(Math.max(array));
  for (let i = 0; i < max; i++) {
    let bucket = new Array(10).fill().map(() => new Array());
    for (let j = 0; j < array.length; j++) {
      bucket[getDigit(array[j], i)].push(array[j]);
    }
    console.log(bucket);
    array = bucket.flat()
  }

  return array;
}

function getBase(key) {
  return key.toString().length;
}

function getDigit(key, digit) {
  return Number(key.toString().charAt(key.toString().length-1-digit));
}
