function solution(phone_number) {
    const len = phone_number.length
    const stars = phone_number.slice(0,len-4).split('').map(num => "*")
    return stars.join('')+phone_number.slice(len-4,len)
}
