function solution(n) {
    let answer = '';
    let num = []
    

    while(n>3){
        if(n%3===0){
          n=n/3-1
          num.push(4)
          
        }else{
            num.push(n%3)
            n=parseInt(n/3)
           
        }
    }
    num.push(n===3?4:n)
    answer = num.reverse().join('')
 
    
    return answer;
}
