// 정렬된 정수 배열과, 타겟 평균값이 주어지고 
//주어진 배열에서 한쌍의 값이 타겟 평균값과 같을 수 있다면 true 없으면 false

function averagePair(arr,target){
    let left = 0
    let right = arr.length - 1
    
    while(left<right){
        let avg = (arr[left]+arr[right])/2
        if(avg===target) return true
        else if(avg>target) right--
        else left ++
    }
    
    return false
}
