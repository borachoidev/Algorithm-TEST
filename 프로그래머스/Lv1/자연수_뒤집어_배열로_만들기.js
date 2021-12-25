function solution(n) {
    const answer = [];
    const s= n.toString()
    for(let i = s.length-1 ; i> -1 ; i--){
      
        answer.push(Number(s[i]))
    }
    return answer;
}
