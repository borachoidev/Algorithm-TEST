let data = [
  '   + -- + - + -   ',
  '   + --- + - +   ',
  '   + -- + - + -   ',
  '   + - + - + - +   ',
];
data = data
  .map(a =>
    String.fromCharCode(
      parseInt(a.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'), 2)
    )
  )
  .join('');

console.log(data);
