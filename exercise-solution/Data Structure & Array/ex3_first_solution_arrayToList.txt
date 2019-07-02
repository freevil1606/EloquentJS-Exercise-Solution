function arrayToList(array) {
  	let currentElement = {value: array[0], rest: null};
  	let list = currentElement;
  	
	for (let i = 1; i < array.length; i++) {
      	let nextElement = {value: array[i], rest: null}
    	currentElement.rest = nextElement;
      	currentElement = nextElement;
    }
  
  	return list;
}

function listToArray(list) {}
function prepend(value, list) {}
function nth(list, index) {}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20