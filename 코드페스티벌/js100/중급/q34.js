//sort 구현하기
const isSorted = input => {
  const arr = input.split(' ');
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return 'NO';
  }

  return 'YES';
};

//sort 메서드 사용해서 구하기
const isSorted2 = input => {
  const sorted = input
    .split(' ')
    .sort((a, b) => a - b)
    .join(' ');

  if (sorted === input) return 'YES';
  return 'NO';
};
