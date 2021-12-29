function solution(dartResult) {
    let answer = 0;
    const nums = dartResult.split(/\D/).filter(a=>!!a)
    const bonusOption = dartResult.split(/\d/).filter(a=>!!a)
                  console.log(nums)    
    const points = []
    for(let i =0 ;i<nums.length ; i++){
       let num = Number(nums[i])
       const bonus = bonusOption[i][0]
       const option= bonusOption[i][1]
        if (bonus==='D'){
            num = num **2
            
        }else if (bonus==='T'){
            
            num = num**3
        }
        
        if(option){
             if(option==='*'){
                if(points.length){
                    points[points.length-1] =  points[points.length-1]*2
                     num*=2
                }else{
                    num*=2
                }
            }else if(option==='#'){
                num*=-1
            }

        }
     
       points.push(num)
    }

    answer = points.reduce((a,b)=>a+b)
   return answer;
}
