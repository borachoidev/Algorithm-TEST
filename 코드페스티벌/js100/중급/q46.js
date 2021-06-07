//각 자리수의 합 2
const solution = n => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i % 10;
    answer += Math.floor(i / 10);
  }

  return answer;
};

solution(20);
