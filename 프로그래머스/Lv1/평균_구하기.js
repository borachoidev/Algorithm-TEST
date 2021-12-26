function solution(arr) {
    var answer = 0;
    const total = arr.reduce((a,b)=>a+b)
    answer = total/arr.length
    return answer;
}
