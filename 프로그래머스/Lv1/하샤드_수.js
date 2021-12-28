function solution(x) {
    let answer = true;
    const total = x.toString().split('').reduce((a,b)=>Number(a)+Number(b))
    answer = !(x%total)
    return answer;
}
