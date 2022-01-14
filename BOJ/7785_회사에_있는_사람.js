const line = require('fs').readFileSync('./example.txt', 'utf8')
let input = line.trim().split('\n')
const n = input[0]

const company = []
for (let i = 1; i <= n; i++) {
  const check = input[i].split(' ')
  if (check[1] === 'enter') {
    company.push(check[0])
  }
  if (check[1] === 'leave') {
    const idx = company.indexOf(check[0])
    company.splice(idx, 1)
  }
}

company.sort().reverse()

console.log(company.join('\n'));