/**
 * # Merge Sort
 * 배열의 크기가 0 이나 1이 될때까지 분할한 후, 분할 된 배열요소를 합병하면서 정렬한다.
 
 * pseudocode

 */

{
  function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }
  mergeSort([2, 5, 3, 1, 7, 8, 30, 0])

  /*
   * @params number[], number[]
   * @return number[]
   */
  function merge(arr1, arr2) {
    const result = []

    let i = 0

    let j = 0

    //loop while j or i bigger than arr.length
    while (i < arr1.length && j < arr2.length) {
      //compare arr1[i] arr2[j]
      //if arr1[i]<arr2[j], push arr1[i] to result, i ++
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i])
        i++
      } else {
        //else push arr2[j] to result, j++
        result.push(arr2[j])
        j++
      }
    }

    while (i < arr1.length) {
      result.push(arr1[i])
      i++
    }

    while (j < arr2.length) {
      result.push(arr2[j])
      j++
    }

    return result
  }
}

/*
 * time complexity : O(NlogN)
 * space complexity : O(N)
 */
