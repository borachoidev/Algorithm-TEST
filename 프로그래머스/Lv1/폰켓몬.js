function solution(nums) {
    let answer = 0;
    const maxCnt = nums.length/2
    const filtered = new Set(nums)
    answer = filtered.size > maxCnt ? maxCnt : filtered.size
    return answer;
}
