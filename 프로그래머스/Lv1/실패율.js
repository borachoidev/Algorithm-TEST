function solution(N, stages) {
    var answer = [];
    //사람수
    let player= stages.length
    let failCnt = new Array(N+1).fill(0)
    stages.forEach(s => failCnt[s-1]++)

    let fail = failCnt.map( (a,i) =>{
        let rate = parseFloat(a/player)
            
        player-=a
   
        return {stage:i+1, rate}
    } )

    
     answer=fail.slice(0,N).sort((a,b)=> b.rate-a.rate).map(a=>a.stage)
    
    return answer;
}
