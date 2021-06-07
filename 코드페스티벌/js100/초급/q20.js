//몫과 나머지
const divided = ab => {
  const a = parseInt(ab.split(' ')[0]);
  const b = parseInt(ab.split(' ')[1]);
  const quotient = Math.floor(a / b);
  const remainder = a % b;
  return quotient + ' ' + remainder;
};
