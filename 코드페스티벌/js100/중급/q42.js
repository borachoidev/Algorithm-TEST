//2020년

const solution = (a, b) => {
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const x = new Date('2020-' + a + '-' + b);
  return day[x.getDay()];
};
