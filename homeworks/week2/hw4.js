function printFactor(n) {
  var number = [ ]
  for (i = 1; i <= n ; i++){
  	if (n % i === 0) {
     console.log(i)
  	} 
  } 
}

printFactor(10)
printFactor(7)