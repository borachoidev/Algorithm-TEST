//거꾸로 출력하기
const reverseNumber = input => {
  const number = input.spilt(' ').reverse();
  const result = '';
  for (let i = 0; i < number.length; i++) {
    result += input[i];
  }

  return result;
};
