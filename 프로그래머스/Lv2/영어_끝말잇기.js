const solution=(n, words)=> {
    let used = []
    for(let i = 0 ; i < words.length ; i++){
        const times = used.length
    
        if(times && used[times-1].slice(-1) !==words[i][0]) return [(i+1)%n===0 ?  n :(i+1)%n, Math.floor(i/n)+1 ]
        if(used.includes(words[i]))  return [(i+1)%n===0 ?  n :(i+1)%n,Math.floor(i/n)+1 ]
      
        used.push(words[i])
    }
    return [0,0]
 }
