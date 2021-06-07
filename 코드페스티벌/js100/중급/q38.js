//호준이의 아르바이트

const getCandies = input =>{
  const scores = input.split(" ").map(a => parseInt(a));
  const winners = Array.from(new Set(scores)).sort( (a,b) => b-a);

 const childeren = scores.filter(a => a===winners[0]||a=== winners[1]|| a=== winners[2]);
 
  return childeren.length;  
}

getCandies("97 86 75 66 55 97 85 97 97 95")
