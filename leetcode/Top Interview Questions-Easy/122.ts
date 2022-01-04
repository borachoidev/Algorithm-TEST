function maxProfit(prices: number[]): number {
    let profit = 0
    let have = false
    for(let i = 0 ; i< prices.length ; i++){
       if(!have && prices[i]<prices[i+1]){
           profit -=prices[i]
           have = true
    
       }else if(have && (prices[i]> prices[i+1] || i === prices.length-1 )){
           profit +=prices[i]
           have =false
      
       }
        
    }
    return profit
};
