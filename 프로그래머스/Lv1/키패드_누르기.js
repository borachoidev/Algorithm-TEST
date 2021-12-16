function solution(numbers, hand) {
  let answer = ''
  const leftKey = [1, 4, 7]
  const rightKey = [3, 6, 9]
  let currentPosition = ['*', '#']

  for (let i = 0; i < numbers.length; i++) {
    const key = numbers[i]
    if (leftKey.includes(key)) {
      answer += 'L'
      currentPosition[0] = key
    } else if (rightKey.includes(key)) {
      answer += 'R'
      currentPosition[1] = key
    } else {
      const shortPath = getShortPath(
        currentPosition[0],
        currentPosition[1],
        key
      )
      if (shortPath === 'L') {
        answer += 'L'
        currentPosition[0] = key
      } else if (shortPath === 'R') {
        answer += 'R'
        currentPosition[1] = key
      } else {
        answer += hand === 'right' ? 'R' : 'L'
        currentPosition[hand === 'right' ? 1 : 0] = key
      }
    }
  }
  return answer
}

const getShortPath = ( l, r, key) => {
    const position = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  }
  const leftPostion =
    Math.abs(position[l][0] - position[key][0]) +
    Math.abs(position[l][1] - position[key][1])
  const rigthPosition =
    Math.abs(position[r][0] - position[key][0]) +
    Math.abs(position[r][1] - position[key][1])

  if (leftPostion > rigthPosition) return 'R'
  if (leftPostion < rigthPosition) return 'L'
  return 'SAME'
}
