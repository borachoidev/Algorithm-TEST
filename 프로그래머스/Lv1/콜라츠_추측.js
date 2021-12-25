function solution(num) {
    let answer = 0;
    let times = 0;
    while(num!==1){
        if(num%2){
            num*=3
            num+=1
            times+=1
        }else{
            num/=2
              times+=1
        }
        
        if(times>500){
            times = -1
            break
        }
    }
    answer = times
    return answer;
}
