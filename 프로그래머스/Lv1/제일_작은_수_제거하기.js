function solution(arr) {
    let answer = [];
  
    if(arr.length === 1) return [-1]
    
    let smallIndex =0;
    for(let i= 0 ; i<arr.length ; i++){
        if(arr[i]<arr[smallIndex]){
            smallIndex=i
        }
    }
    
    arr.splice(smallIndex,1)

    return arr
}
