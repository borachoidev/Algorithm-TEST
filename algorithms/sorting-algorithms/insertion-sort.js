/**
 * # Insertion Sort
 * 정렬된 부분을 점진적으로 늘려가면서 정렬한다. 요소를 정렬된 부분에 비교하면서 정렬.
 
 * pseudocode
 - 배열의 두번째 요소부터 시작한다.(첫번째 요소는 정렬되어 있다고 가정하기때문이다)
 - 두번째요소를 그 전요소와 비교하여 필요하면스왑한다.
 - 계속해서 다음 요소가 올바른 위치에 있는지 확인한다. 올바른 위치가 아니면 정렬된 요소 안에서 올바른 위치에 올때까지 반복한다.
 - 배열이 정렬될때까지 반복한다. 
 */
{
  function insertionSort(arr) {
    var currentVal
    for (var i = 1; i < arr.length; i++) {
      currentVal = arr[i]
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentVal
    }
    return arr
  }

  insertionSort([2, 1, 32, 31, 44, 9, 67, 3])
}
/*
 * time complexity : O(N^2)
 * 정렬이 거의 되어있을경우 유리하다. 그러나 역으로 정렬되어있을때 가장 불리하다.정렬된 배열이있고 새로운 값을 정렬할때 유리하다.
 */
