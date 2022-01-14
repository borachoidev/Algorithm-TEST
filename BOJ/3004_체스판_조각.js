const input = require('fs').readFileSync('_input.txt').toString().split('\n');
const n = parseInt(input[0])

if (n % 2 === 0) {
  const times = n / 2 
  console.log((times + 1) ** 2)
} else {

  const x = parseInt((n + 1 )/ 2)

  console.log((x + 1) * x)
}
