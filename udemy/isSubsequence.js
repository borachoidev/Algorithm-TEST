function isSubsequence(first,second) {
    //첫번째 단어 포인터 설정
    let i = 0
    for(let j = 0 ; j<second.length ;j++ ){
         if(first[i]===second[j]){
             i++
         }
        if(i+1 === first.length)return true
    }
    
  return false
}
