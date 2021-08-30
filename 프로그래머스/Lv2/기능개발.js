function solution(progresses, speeds) {
  var answer = [];
  const days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  for (let i = 0; i < days.length; i++) {
    let deploy = 1;
    for (let j = i + 1; j < days.length; j++) {
      if (days[i] > days[j] || days[i] == days[j]) {
        deploy++;
        console.log(days[i], days[j], '-=-');
      } else {
        answer.push(deploy);
        console.log(days[i], days[j]);
        i = j - 1;
        break;
      }
      answer.push(deploy);
    }
  }
  return answer;
}

//
function solution2(progresses, speeds) {
  var answer = [];
  const days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );
  console.log(days);
  for (let i = 0; i < days.length - 1; i++) {
    let deploy = 1;
    for (let j = i + 1; j < days.length; j++) {
      if (days[i] > days[j] || days[i] == days[j]) {
        deploy++;
        console.log(days[i], days[j]);
      } else {
        answer.push(deploy);
        console.log(days[i], days[j], '-=-');
        i = j;
        break;
      }
      if (i === days.length - 2) answer.push(deploy);
    }
  }
  return answer;
}

// 테케 성공 but ,..
function solution3(progresses, speeds) {
  let answer = [];
  const days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  console.log(days);
  for (let i = 0; i < days.length - 1; i++) {
    let deploy = 1;
    for (let j = i + 1; j < days.length; j++) {
      if (days[i] > days[j] || days[i] == days[j]) {
        deploy++;
      } else {
        answer.push(deploy);
        i = j - 1;
        break;
      }
    }
  }

  const last = answer.reduce((a, b) => a + b, 0);

  answer.push(progresses.length - last);
  return answer;
}
