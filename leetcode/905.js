/** 905. Sort Array By Parity/easy
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    return nums.sort((a,b)=>{
        if(a%2===0&&b%2!==0) return -1;
        return 1;
    })
    
};
