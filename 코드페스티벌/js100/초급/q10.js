//별찍기
//입력
//5

//출력
//     *
//    ***
//   *****
//  *******
// *********

const printStars = num => {
  for (let i = 1; i <= num; i++) {
    let star = '';
    for (let j = 1; j < 10; j++) {
      if (j > num - i && j < num + i) {
        star += '*';
      } else {
        star += ' ';
      }
    }
    star += '\n';
    console.log(star);
  }
};
