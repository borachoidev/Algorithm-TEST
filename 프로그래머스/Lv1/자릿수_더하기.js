function solution(n)
{
    var answer = 0;
    answer = n.toString().split('').reduce((curr,prev)=>Number(prev)+Number(curr),0)
    return answer;
}
