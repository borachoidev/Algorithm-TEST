function solution(n) {
  var answer = 0;
  const ternaryString = n.toString(3);
  let reverse = '';
  for (let i = 0, len = ternaryString.length; i < len; i++) {
    reverse += ternaryString[len - i - 1];
  }
  let dec = parseInt(reverse, 3);
  answer = dec;
  return answer;
}
