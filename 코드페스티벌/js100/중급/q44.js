//각 자리수의 합

const solution = integers => {
  let answer = 0;
  const arr = integers.toString().split('');
  answer = arr.reduce((total, curr) => total + curr * 1, 0);
  return answer;
};
