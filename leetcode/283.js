/** Move Zeroes / easy
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroes = nums.filter(zero=> zero ===0).length
    for (i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--
        }
        
        if(i === nums.length-zeroes-1) break
    }
    
};