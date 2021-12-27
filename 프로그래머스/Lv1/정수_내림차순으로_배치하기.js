function solution(n) {
    var answer = 0;
    const strArr = n.toString().split('')
    strArr.sort((a,b)=> Number(b)-Number(a))
    answer = Number(strArr.join(''))
    return answer;
}
