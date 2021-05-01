function isPrimeorComposite(arr) {
  for (let j = 1; j < arr.length; j++) {
    if (isPrimeNumber(Number(arr[j]))) {
      console.log('Prime')
    } else {
      console.log('Composite')
    }
  }
}

function isPrimeNumber(n) {
  if (n === 1) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

isPrimeorComposite([1, 2, 3, 4, 5])
