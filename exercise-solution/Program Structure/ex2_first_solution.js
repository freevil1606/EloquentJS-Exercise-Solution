for(let number = 0; number < 100; number++) {
  let isDivisibleBy3 = number % 3 == 0;
  let isDivisibleBy5 = number % 5 == 0;
  
  if (isDivisibleBy3 && isDivisibleBy5) {
    console.log("FizzBuzz");
    continue;
  }
  
  if (isDivisibleBy3) {
    console.log("Fizz");
    continue;
  }
  
  if (isDivisibleBy5) {
    console.log("Buzz");
    continue;
  }
                
  console.log(number);
}