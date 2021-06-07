//객체 만들기
const object = input => {
  const keys = input.split(' ');
  const values = input.split(' ');
  const obj = {};

  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = parseInt(values[i], 10);
  }

  return obj;
};
