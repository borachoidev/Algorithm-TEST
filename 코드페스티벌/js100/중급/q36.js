//구구단 출력하기
const multiplication = number => {
  let result = '';
  for (let i = 2; i < 10; i++) {
    result += number * i + ' ';
  }
  return result;
};
