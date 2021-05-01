function isPalindrome(str) {
  if (reverse(str) === str) {
    console.log('True')
  } else {
    console.log('False')
  }
}

function reverse(str) {
  let newstr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newstr = newstr + str[i]
  }
  return newstr
}

isPalindrome('abbbbba')
