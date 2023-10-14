console.log(require('fs').readFileSync('input.txt').toString().trim().split('\n').slice(1).sort((a, b) => {return a - b;}).join('\n'));
