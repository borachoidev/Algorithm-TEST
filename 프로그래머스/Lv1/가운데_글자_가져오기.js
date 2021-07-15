function solution(s) {
    let answer = '';
    const middle = Math.ceil(s.length/2)-1;
    if(s.length%2===0){
        answer = s[middle]+s[middle+1];
    }else{
        answer = s[middle];
    }
    
    return answer;
}