function arrayToList(array, index = 0) {
  	if (index == array.length) return null
    return {value: array[index], rest: arrayToList(array, index + 1)}
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