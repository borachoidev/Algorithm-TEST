const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = input[0];
let answer = '';
for (let i = 1; i <= n; i++) {
  answer += isVPS(input[i]) + '\n';
}

console.log(answer);
function isVPS(strings) {
  const arr = strings.split('');
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '(') {
      stack.push(0);
    } else {
      if (stack.length === 0) {
        return 'NO';
      }
      stack.pop();
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
}
