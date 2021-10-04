function solution(x, n) {
  var answer = [];
  let number = x;
  while (answer.length !== n) {
    answer.push(number);
    number += x;
  }
  return answer;
}
