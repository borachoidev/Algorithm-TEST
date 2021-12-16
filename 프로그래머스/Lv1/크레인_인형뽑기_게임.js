function solution(board, moves) {
  let answer = 0
  let basket = []
  
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i] - 1
    let index = 0
    
    //크레인 이동에 있는 인형찾기
    const b = board.find((item, i) => {
      index = i
      return !!item[move]
    })
    
    //인형이 없으면 다음 이동으로 
    if(b ==undefined) continue
    
    const bSize = basket.length
    //바구니에 담긴 인형이 같을때 지워주기
    if (bSize && basket[bSize - 1] === b[move]) {
      basket.pop()
      answer += 2
    } else {
      //같지않거나 바구니가 비어있으면 바구니에 넣기
      basket.push(b[move])
    }
    
    //뽑은 인형 0으로 만들기
    board[index][move]=0

  }
  return answer
}
