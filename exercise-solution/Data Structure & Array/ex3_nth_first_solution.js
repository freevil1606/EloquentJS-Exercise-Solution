function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let array = [];
    while (list != null) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

/* Not in-place */
function prepend(value, rootList) {
    return {value, rest: rootList};
}

function nth(list, index) {
    if (list == null) return null;
    for (let i = 0; i < index; i++) {
        list = list.rest;
        if (list == null) return null;
    }
    return list.value;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20