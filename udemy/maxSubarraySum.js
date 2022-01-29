// 배열과 숫자가 주어지고 숫자만큼의 연속되는 배열값중 최대합을 찾아라
//input 배열, 정수
//output 최대 합
function maxSubarraySum(arr,num){
  if (num > arr.length) return null
  // 최댓값, 임시값 변수를 선언한다
  let max = 0
  let temp = 0
  // arr[0]에서 num개의 합을 구한다  //최댓값변수에 합을 넣는다.
  for(let i = 0 ; i < num; i++){
      max+=arr[i]
  }
  //임시값 변수 합을 넣는다.
  temp = max
  //arr를 num부터 arr 길이만큼 반복문을 돌린다
  for(let i = num ; i < arr.length ; i++){
    //현재 임시값에 arr[num-i]값을 빼고, arr[num]값을 넣는다.
    temp = temp - arr[i-num] + arr[i]
    // 임시값과 최댓값중 큰 값을 최대값으로 설정한다. 
    if(temp > max) max=temp
  }
    return max
}
