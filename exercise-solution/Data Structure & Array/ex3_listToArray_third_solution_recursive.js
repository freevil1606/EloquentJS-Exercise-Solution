function arrayToList(array) {
  	let list = null;
	for (let i = array.length - 1; i >= 0; i--) {
		list = {value: array[i], rest: list};
    }
  	return list;
}

function listToArray(list) {
    if (list == null) {
        return [];
    } else {
        let array = listToArray(list.rest);
        array.unshift(list.value);
        return array;
    }
}

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