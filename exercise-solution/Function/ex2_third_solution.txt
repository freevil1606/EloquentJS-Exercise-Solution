function isEven(number) {
  	if (number < 0) return "A positive whole number, okay?";
  	if (number > 1) return isEven(number - 2);
  	return !number;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));