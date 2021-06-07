function solution(record) {
  var answer = [];
  const userId = new Map();

  for (let i = 0; i < record.length; i++) {
    const command = record[i].split(' ')[0];
    const user = record[i].split(' ')[1];

    if (command === 'Enter') {
      answer.push([record[i].split(' ')[1], '님이 들어왔습니다.']);
      userId.set(record[i].split(' ')[1], record[i].split(' ')[2]);
    } else if (command === 'Leave') {
      answer.push([record[i].split(' ')[1], '님이 나갔습니다.']);
    } else {
      userId.set(record[i].split(' ')[1], record[i].split(' ')[2]);
    }
  }

  answer = answer.map(([a, b]) => userId.get(a) + b);
  return answer;
}
