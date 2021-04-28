function join(arr, concatStr) {
  let result = '';
  for (var i = 0; i < arr.length; i++) {
    if (result) {
      result += concatStr;
    }
    result += arr[i];
  }
  return result;
}

function repeat(str, times) {
  var word = ''	
  for (var i = 1; i <= times; i++){
  	word += str
  }
  return word
}

console.log(join(["a", "b", "c"], "!"));
console.log(join([1, 2, 3], ''))
console.log(join(["a", 1, "b", 2, "c", 3], ','))

console.log(repeat('a', 5))
console.log(repeat('yoyo', 2))




