function solution(clothes) {
    var answer = 0;
    let clothing = {}
    for(let i = 0 ; i < clothes.length ; i++){
        if(clothing[clothes[i][1]]) clothing[clothes[i][1]]= [...clothing[clothes[i][1]],clothes[i][0]]
        else clothing[clothes[i][1]] = [clothes[i][0]]
    }
  const keys = Object.keys(clothing)
  answer= keys.map(key => clothing[key].length+1).reduce((a,b)=>a*b) -1
    return answer;
}
