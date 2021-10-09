function solution(lottos, win_nums) {
  var answer = [];
  const zeros = lottos.filter(lotto => lotto == 0).length;

  const sames = lottos.filter(lotto => win_nums.includes(lotto)).length;
  const rank = [6, 6, 5, 4, 3, 2, 1];
  answer.push(rank[sames + zeros]);
  answer.push(rank[sames]);

  return answer;
}
