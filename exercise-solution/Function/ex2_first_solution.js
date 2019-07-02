function isEven(number) {
  	if (number < 0) return isEven(-n);
	if (number < 2) return !Boolean(number);
  	return isEven(number - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));