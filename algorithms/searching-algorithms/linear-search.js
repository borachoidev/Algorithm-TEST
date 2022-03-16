{
  function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i
    }
    return -1
  }
}

/**
 * time complexity : 
    - (Best) : O(1)
    - (Worst) : O(N)
 */
