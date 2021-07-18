function solution(absolutes, signs) {
  let answer = 0;
  const realNumber = absolutes.map((number, idx) => {
    if (!signs[idx]) {
      return number * -1;
    }

    return number;
  });

  answer = realNumber.reduce((a, b) => a + b, 0);
  return answer;
}
