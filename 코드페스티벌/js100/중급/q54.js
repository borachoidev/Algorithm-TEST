function solution(l) {
  l.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < l.length - 1; i++) {
    if (l[i] + 1 !== l[i + 1]) {
      return 'NO';
    }
  }
  return 'YES';
}
