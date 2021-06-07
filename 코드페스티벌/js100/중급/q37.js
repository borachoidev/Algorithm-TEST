//반장 선거
const leader = input =>{
  const vote = input.split(" ");
  const result = vote.reduce((prev, current)=>{
   prev[current] = (prev[current]||0) + 1;
   return prev;
  },{});
  const winner = Object.keys(result).reduce( (a,b)=>
   result[a]>result[b] ? a : b
  );
  
  console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다. `)
}

leader("원범 원범 혜원 혜원 혜원 혜원 유진 유진")
