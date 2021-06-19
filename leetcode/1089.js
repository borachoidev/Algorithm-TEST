// # 1089. Duplicate Zeros / easy
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let temp = [];
    let idx = 0;

    while(idx!=arr.length){
        temp.push(arr[idx]);
        if(arr[idx]===0){
            temp.push(0);
        }
        
        idx ++;
    }
    for(let i =0 ;i <arr.length;i++){
        if(arr[i]!==temp) arr[i]=temp[i];
    }
};
