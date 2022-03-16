/**
 * # Selection Sort
 * 버블 정렬과 비슷하나 가장 작은 수를 찾아 먼저 정렬한다
 
 * pseudocode
 - 첫번째 값을 최소값으로 저장한다.
 - 다음 요소와 비교하며 작은 수를 찾는다.
 - 작은 수를 찾았으면, 새로운 최솟값으로 지정하고 배열이 끝날때까지 계속한다.
 - 만약에 최솟값이 처음 시작 인덱스와 다르면 두 수의 값을 교환한다.
 - 배열이 정렬될 때까지 반복한다.
 */

{
  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let minimum = i
      for (j = i + 1; j < arr.length; j++) {
        console.log(arr[j], arr[j])
        if (arr[j] < arr[minimum]) {
          minimum = j
        }
      }
      if (minimum !== i) {
        const temp = arr[i]
        arr[i] = arr[minimum]
        arr[minimum] = temp
      }
      console.log(arr)
    }
    return arr
  }

  selectionSort([2, 1, 32, 31, 44, 9, 67, 3])
}

/**
 * time complexity : O(N^2)
 * 메모리 사용이나 스왑 횟수를 줄이이는것을 고려하는 경우라면 버블정렬보다 선택 정렬이 더 낫다.
 */
