function solution(s){
    if (s[0]===")") return false
    
    let stack = []
    s.split('').forEach((bracket,i) => 
    {        
        if(stack[stack.length-1]==="("&&bracket ===")") stack.pop() 
        else stack.push(bracket)
    }
     )

    return !stack.length;
}
