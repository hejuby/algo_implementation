let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).sort();

console.log(input.reduce((acc, cur) => acc + cur, 0)/5);
console.log(input[2]);
