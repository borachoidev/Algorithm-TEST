const solution=(s)=>{
    let stack = [];
    const arr = s.split("");
    
    
    for(let i =0;i<arr.length;i++){
        if(stack[stack.length-1]!==arr[i]){
            stack.push(arr[i]);
        }else{
            stack.pop();
        }
    }
    
    return stack.length===0?1:0;
}
