function solution(s, n) {
    var answer = '';
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
    for(let i = 0 ; i < s.length ; i++){
        if(s[i]===' '){
            answer +=" "
            continue
        }
        
        if(alphabet.indexOf(s[i])>-1){
            let index = alphabet.indexOf(s[i]) + n
            answer+= alphabet[index%26]
        }else{
           let index= alphabet.indexOf(s[i].toLowerCase())+ n
               answer+= alphabet[index%26].toUpperCase()
        }
    }
    return answer;
}
