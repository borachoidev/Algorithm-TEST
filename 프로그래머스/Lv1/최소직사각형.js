function solution(sizes) {
    let answer = 0;
    const sortedSizes = sizes.map(size=>size.sort((a,b)=>a-b))
    let walletSize = [0,0]
    for(let i = 0 ; i< sortedSizes.length ; i ++ ){
        if(sortedSizes[i][0]>walletSize[0]){
            walletSize[0]=sortedSizes[i][0]
        }
         if(sortedSizes[i][1]>walletSize[1]){
            walletSize[1]=sortedSizes[i][1]
        }
    }
    answer = walletSize[0]*walletSize[1]
    return answer;
}
