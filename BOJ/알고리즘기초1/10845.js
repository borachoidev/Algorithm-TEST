const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = input[0];
let answer = '';

class Queue {
  constructor() {
    this.queue = [];
  }
  push(elem) {
    this.queue.push(elem);
  }
  pop() {
    return this.empty() === 1 ? -1 : this.queue.shift();
  }
  size() {
    return this.queue.length;
  }
  empty() {
    return this.size() === 0 ? 1 : 0;
  }
  front() {
    return this.empty() === 1 ? -1 : this.queue[0];
  }
  back() {
    return this.empty() === 1 ? -1 : this.queue[this.size() - 1];
  }
}

const queue = new Queue();
for (let i = 1; i <= n; i++) {
  const command = input[i].split(' ');
  let res;
  if (command[0] === 'push') {
    queue.push(command[1]);
    continue;
  } else if (command[0] === 'pop') {
    res = queue.pop();
  } else if (command[0] === 'size') {
    res = queue.size();
  } else if (command[0] === 'empty') {
    res = queue.empty();
  } else if (command[0] === 'front') {
    res = queue.front();
  } else {
    res = queue.back();
  }

  answer += res + '\n';
}

console.log(answer);
