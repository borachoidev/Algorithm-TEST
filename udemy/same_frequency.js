function sameFrequency(num1,num2){
    
    //문자열로 만들기
    const strNum1 = num1.toString()
    const strNum2 = num2.toString()

    //길이가 같지 않으면 false 반환    
    if(strNum1.length !== strNum2.length) return false
    
    //비교 객체만들기
    const lookup = {}
    
    //첫번째 숫자 빈도 구하기
    for(let i = 0; i< strNum1.length ; i++){
        let digit = strNum1[i]
        lookup[digit] = (lookup[digit] || 0) + 1
    }
    //빈도객체에서 num2의 숫자와 비교하기
    for(let i = 0; i< strNum2.length ; i++){
        let digit = strNum2[i]
        if(!lookup[digit]) return false
        lookup[digit] -=1 
    }
    
    return true
}
