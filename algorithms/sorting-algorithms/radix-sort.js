/**
 * # Radix Sort
 * 값 자체를 비교하지 않고 자릿수의 숫자로 비교한다. 
 
 * pseudocode

 */

{
  function getDigit(number, postion) {
    return Math.floor(Math.abs(number) / Math.pow(10, postion)) % 10
  }

  function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
  }

  function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }

    return maxDigits
  }

  function radixSort(arr) {
    const maxDigitCount = mostDigits(arr)

    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => [])
      for (let i = 0; i < arr.length; i++) {
        let digit = getDigit(arr[i], k)
        digitBuckets[digit].push(arr[i])
      }
      arr = [].concat(...digitBuckets)
    }

    return arr
  }
  radixSort([12, 3, 5234, 13425, 643, 234, 53])
}
/*
 * time complexity : O(Nk) (k는 자릿수)
 * space complexity : O(N+k)
 * 정렬이 거의 되어있을경우 유리하다. 그러나 역으로 정렬되어있을때 가장 불리하다.정렬된 배열이있고 새로운 값을 정렬할때 유리하다.
 */
