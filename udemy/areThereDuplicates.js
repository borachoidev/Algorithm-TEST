// 여러개의 입력값을 받아 입력값중 중복값이 있는지 확인하는 함수를 만들어라
// 입력값은 무엇? 랜덤개의 number,string,boolean
// 도출해야 하는 값은 ? boolean -> true/false
// 충분한 정보가 있는가 ? 입력데이터의 타입에서 객체나, 참조 타입이 올 수 있는가, null, undefined 등

// # Frequency Counter 패턴
function areThereDuplicates(...arg) {
  //빈도객체 만들기
  const frequency = {}
  //매개변수 빈도수 구하기
  for(let i = 0; i < arg.length; i++){
      frequency[arg[i]] = (frequency[arg[i]]||0 ) +1
  }
  //빈도 객체 값중 2가 넘는 값 찾기
  for( let val in frequency){
      if(frequency[val]>1) return true
  }
  
  return false
}

//# multiple pointer
function areThereDuplicates(...arg) {
    //매개변수 정렬
    arg.sort()
    //포인터 변수 설정
    let i = 0
    //반복문
    for(let j = 1; j<arg.length ; j++){
				//포인터인덱스와 반복문 변수인덱스의 
        if(arg[i]===arg[j]) return true
        // 같으면 true 반환
        i++
        // 값이 다르면 포인터 인덱스 증가, 반복문 증가
    }
    return false
}
