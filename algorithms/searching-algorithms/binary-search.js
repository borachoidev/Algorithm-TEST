{
  function binarySearch(arr, target) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
      let middle = Math.ceil((start + end) / 2)

      if (target === arr[middle]) return middle
      else if (target > arr[middle]) start = middle + 1
      else end = middle - 1
    }
    return -1
  }
}

/**
 * time complexity : 
  - (Best) : O(1)
  - (Worst) : O(longN)
 */
