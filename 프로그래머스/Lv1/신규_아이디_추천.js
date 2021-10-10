function solution(new_id) {
  let answer = '';
  answer = new_id
    .toLowerCase()
    .replace(/[^-_.a-z0-9]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '');
  if (answer === '') answer = 'a';

  if (answer.length > 15) answer = answer.substring(0, 15).replace(/\.$/g, '');
  if (answer.length < 3) {
    const last = answer[answer.length - 1];

    while (answer.length < 3) {
      answer += last;
    }
  }
  return answer;
}
