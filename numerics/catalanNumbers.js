// return a catalan number using dynamic programming
function catalanNumber(index) {
  let numbers = [];
  numbers[0] = 1;
  numbers[1] = 1;
  for (let i = 2; i < index; i++) {
    numbers[i] = 0;
    for (let j = 0; j < i; j++) {
      numbers[i] += numbers[j] * numbers[i-1-j];
    }
  }

  return numbers.pop();
}

// time complexity of the algorithm is n^2 due to the double for-loop