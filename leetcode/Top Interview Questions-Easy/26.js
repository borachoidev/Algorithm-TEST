// Remove Duplicates from Sorted Array /easy
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let prev;
    for(let i = 0 ; i < nums.length ; i++){
        if(i===0 || prev !== nums[i]){
        prev = nums[i];
        continue;
        }
        for(let j = i ; j<nums.length-1 ; j++){
            nums[j]= nums[j+1];
        }
        nums.length --;
        i--;
        
    }
    
};
