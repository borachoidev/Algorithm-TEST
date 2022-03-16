/**
 * # Bubble Sort
 * 가장 첫번째 요소부터 차례대로 다음 요소와 비교하면서 정렬. 정렬할 요소가 비교할 요소보다 크면 요소의 위치를 바꾸고, 작다면 비교할 요소가 다음 정렬할 요소가 된다. 반복을 거듭함에 따라 정렬해야하는 항목 수가 감소한다.
 
 * pseudocode
 - i 라는 변수를 가지고 배열의 맨 끝에서 반복문을 시작해서 맨앞으로 끝낸다.
 - 그 내부에 j라는 변수를 가진 반복문을 처음부터 i-1 까지 실행시킨다.
 - 만약 arr[j]가 arr[j+1] 보다 크다면, 두 값의 자리를 바꾼다.
 - 정렬된 배열을 반환한다.
 */

{
  function bubbleSort(arr) {
    let noSwaps
    for (let i = arr.length; i > 0; i--) {
      noSwaps = true
      for (let j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j + 1])
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
          noSwaps = false
        }
      }
      if (noSwaps) break
    }

    return arr
  }

  bubbleSort([2, 1, 32, 31, 44, 9, 67, 3])
}

/**
 * time complexity : O(N^2)
 * 그러나 데이터가 거의 정렬된 상태나 이미 정렬이 끝난경우  O(n)에 가깝다
 */
