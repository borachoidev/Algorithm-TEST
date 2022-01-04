//# Squares of a Sorted Array /easy

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squares = nums.map(num=> num*num);
    return squares.sort((a,b)=>a-b);
};
