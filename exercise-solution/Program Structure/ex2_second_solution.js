for(let number = 0; number < 100; number++) {
  let printingString = "";
  
  if (number % 3 == 0) {
  	printingString = "Fizz"
  } 

  if (number % 5 == 0) {
   	printingString += "Buzz";
  }
  
  console.log(printingString || number)
}