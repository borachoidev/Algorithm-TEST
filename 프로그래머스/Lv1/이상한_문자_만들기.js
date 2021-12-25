function solution(s) {
    let answer = '';
    const wordArray = s.split(' ')

    for(let i = 0 ; i<wordArray.length; i++){
        const wordLength = wordArray[i].length 
        for(let j = 0 ; j< wordLength; j++){
            if(j%2){
                  answer+=wordArray[i][j].toLowerCase()             
            }else{
                 answer+=wordArray[i][j].toUpperCase()
            }
        }
        if(i!==wordArray.length-1) answer+=' '
        
    }
    return answer;
}
