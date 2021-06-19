// # Max Consecutive Ones / easy
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
   let answer = 0;
    let temp = 0 ;
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] === 1){
            temp++;
            
        }else{
            if(temp > answer ) answer = temp;
            temp=0;
        }

    }
    
    if(temp > answer ) answer = temp;
    return answer
};
