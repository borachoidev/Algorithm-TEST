function solution(s) {  
     const nonDigit = (/\D/g).test(s)
    return  ( s.length ===4 || s.length ==6) &&!nonDigit;
}
