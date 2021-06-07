//놀이동산에 가자
const limited = input => {
  const max = parseInt(input.split(' ')[0]);
  const numberOfPeople = parseInt(input.split(' ')[1]);
  const weights = input.split(' ');
  let result = 0;
  let temp = 0;
  for (let i = 2; i < numberOfPeople; i++) {
    temp += parseInt(weights[i]);
    if (temp > max) {
      return result;
    }
    result++;
  }
};
