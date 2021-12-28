function solution(s){
    let answer = true;
    let cnt = 0;
for(let i = 0 ; i<s.length ;i++){

    if(s[i].toUpperCase()==='P'){
        cnt++;
    }else if(s[i].toUpperCase()==='Y'){
        cnt--;
    }
}

    return !cnt;
}
