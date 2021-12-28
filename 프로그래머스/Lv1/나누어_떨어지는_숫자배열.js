function solution(arr, divisor) {
    let answer = [];
    answer = arr.filter(num=> num%divisor===0).sort((a,b)=>a-b)
    if(!answer.length) answer = [-1]
    return answer;
}
