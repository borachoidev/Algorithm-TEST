/**
 * # Quick Sort
 * 기준 값을 정해 기준값과 비교한다. 기준값보다 작은요소를 기준값 앞으로, 큰 요소는 뒤에 배치하고 기준값을 제외한 왼쪽과 오른쪽을 다시 정렬한다. 부분 리스트가 0이나 1이 될 때까지 반복한다.
 
 * pseudocode
 */

{
  function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    let pivot = arr[start]
    let swapIdx = start
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++
        swap(arr, swqpIdx, i)
      }
    }
    swap(arr, start, swqpIdx)
    return swqpIdx
  }

  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right)
      quickSort(arr, left, pivotIndex - 1)
      quickSort(arr, pivotIndex + 1, right)
    }

    return arr
  }

  quickSort([4, 7, 2, 1, 5, 7, 6, 3])
}
/*
 * time complexity : O(NlogN)
 * space complexity : O(logN)
 */
