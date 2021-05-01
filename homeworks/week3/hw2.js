function printNarNumbers(from, to) {
  for (let i = from; i <= to; i++) {
    if (isNarNumber(i)) {
      console.log(i)
    }
  }
}

function isNarNumber(n) {
  const digit = length(n)
  let sum = 0
  let m = n
  while (m !== 0) {
    const num = m % 10
    sum += num ** digit
    m = Math.floor(m / 10)
  }
  return sum === n
}

function length(n) {
  let result = 0
  let m = n
  while (m > 0) {
    m = Math.floor(m / 10)
    result++
  }
  return result
}

printNarNumbers(5, 200)
