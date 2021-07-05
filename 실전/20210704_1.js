function solution(k, rates) {
  let answer = 0;
  let dollar = false;
  let money = k;
  for (let i = 0; i < rates.length - 1; i++) {
    if (dollar && rates[i] > rates[i + 1]) {
      money += rates[i];
      dollar = false;
    } else if (!dollar) {
      if (!(money < rates[i]) && rates[i] < rates[i + 1]) {
        money -= rates[i];
        dollar = true;
        if (i === rates.length - 2) {
          money += rates[i + 1];
        }
      }
    }
  }

  answer = money;

  return answer;
}
