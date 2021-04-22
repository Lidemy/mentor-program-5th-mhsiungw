//方法一
function capitalize(str) {
   if (str[0].charCodeAt() > 97){
   var separateWord = str.toLowerCase().split(' ');
      separateWord[0] = separateWord[0].charAt(0).toUpperCase() +
      separateWord[0].substring(1)  
      return separateWord.join(' ');
  } else {
  	return str
  }
}
console.log(capitalize('hello'));

//方法二
function capitalize(str) {
   if (str[0].charCodeAt() > 97){
      str = str[0].toUpperCase() +
      str.substring(1)  
      return str
  } else {
  	return str
  }
}
console.log(capitalize('hello'));