function solution(numbers) {
    let answer = -1;
    const numArray = [0,1,2,3,4,5,6,7,8,9]
    const notIncluded = numArray.filter(number=> !(numbers.includes(number)))
    answer = notIncluded.reduce((prev,curr)=> prev+curr)
    return answer;
}
