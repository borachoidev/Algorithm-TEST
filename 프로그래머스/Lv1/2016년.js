function solution(a, b) {
  let answer = '';
  let days = 0;
  let dates = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  let day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  for (let i = 0; i < a; i++) {
    days += dates[i];
  }
  days += Number(b);
  answer = day[days % 7];

  return answer;
}
