function solution(left, right) {
    var answer = 0;
    let even = []
    let odd = []
    for(let i =left ; i<=right ; i++){
        let cnt = 0;
        for(let j = 1; j<=i ; j++){
            if(i%j===0) cnt ++ 
        }
        
        if(cnt%2) odd.push(i)
        else even.push(i)
    }
    const plus = even.reduce((a,b)=>a+b)
    const minus = odd.reduce((a,b)=> a+b)
   
    
    answer = plus - minus
    return answer;
}
