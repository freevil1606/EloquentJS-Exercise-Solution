function arrayToList(array, index = array.length - 1, innerElement = null) {
    if (index == -1) return innerElement;
    else {
    	let currentElement = {value: array[index], rest: innerElement};
      	return arrayToList(array, index - 1, currentElement)
    }
}

function listToArray(list) {}
function prepend(value, list) {}
function nth(list, index) {}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20