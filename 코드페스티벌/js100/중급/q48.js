//대소문자 바꿔서 출력하기

const solution = strings => {
  return strings
    .split('')
    .map(s => {
      if (s === s.toUpperCase()) {
        return s.toLowerCase();
      } else {
        return s.toUpperCase();
      }
    })
    .join('');
};
