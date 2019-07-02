function countBs(string) {
  	return countChar(string, "B");
}

function countChar(string, char) {
  	let count = 0;
  	for (let charItr of string) {
    	if (charItr == char) count++;
    }
  	return count;
}

/*
	Normal for loop:
	for (let i = 0; i < string.length; i++) {
    	if (string[i] == char) count++;
    }
	
    For loop with of:
    for (let charItr of string) {
    	if (charItr == char) count++;
    }
    
    Convert string array and use forEach
    [...string].forEach(charAt => {if (charAt == char) count++});
*/

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4