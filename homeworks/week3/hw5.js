function isBigorSmall(arr) {
  for (let i = 1; i < arr.length; i++) {
    const a = arr[i].split(' ')
    if (Number(a[2]) === 1) {
      console.log(isBigNumber(BigInt(a[0]), BigInt(a[1])))
    }
    if (Number(a[2]) === -1) {
      console.log(isSmallNumber(BigInt(a[0]), BigInt(a[1])))
    }
  }
}

function isBigNumber(n1, n2) {
  if (n1 > n2) {
    return 'A'
  } else if (n2 > n1) {
    return 'B'
  } else {
    return 'DRAW'
  }
}

function isSmallNumber(n1, n2) {
  if (n1 < n2) {
    return 'A'
  } else if (n2 < n1) {
    return 'B'
  } else {
    return 'DRAW'
  }
}

isBigorSmall(['1', '1 2 -1'])
