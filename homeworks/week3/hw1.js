function printStars(number) {
  for (let i = 1; i <= number; i++) {
    console.log(repeat('*', i))
  }
}

function repeat(n, t) {
  let sum = ''
  for (let j = 1; j <= t; j++) {
    sum += n
  }
  return sum
}

printStars(3)
