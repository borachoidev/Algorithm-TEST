const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];

let answer = '';
for (let i = 1; i <= n; i++) {
  const sentence = input[i];
  const word = sentence.split(' ');
  let res = '';
  for (let j = 0; j < word.length; j++) {
    res += word[j].split('').reverse().join('') + ' ';
  }
  answer += res.trim() + '\n';
}

console.log(answer);
