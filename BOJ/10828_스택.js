const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  top() {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this.stack[this.size() - 1];
    }
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0 ? true : false;
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this.stack.pop();
    }
  }
}
const n = input[0];
let stack = new Stack();
let answer = '';
for (let i = 1; i <= n; i++) {
  const command = input[i].split(' ');
  let res = '';
  if (command[0] === 'push') {
    const value = command[1];
    stack.push(value);
    continue;
  } else if (command[0] === 'top') {
    res = stack.top();
  } else if (command[0] === 'size') {
    res = stack.size();
  } else if (command[0] === 'empty') {
    res = stack.isEmpty() ? '1' : '0';
  } else {
    res = stack.pop();
  }

  answer += res + '\n';
}

console.log(answer);
