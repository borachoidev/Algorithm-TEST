//10진수를 2진수로
const solution = a => {
  return a.toString(2);
};

const solution2 = dec => {
  let arrBinary = [];
  while (dec) {
    arrBinary.push(dec % 2);
    dec = Math.floor(dec / 2);
  }

  return arrBinary.reverse().join('');
};
