function solution(s) {
    var answer = '';
    const array = s.split('')
    const sorted = array.sort((a,b)=>{
        if(a<b) return 1
        else return -1
    });
    answer = sorted.join('')
    return answer;
}
