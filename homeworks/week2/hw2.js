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
