let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(item => item.split(' '));
input[1] = input[1].map(Number).sort((a,b) => b - a);

console.log(input[1][Number(input[0][1])-1]);
