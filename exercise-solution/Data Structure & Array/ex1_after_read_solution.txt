function range(from, to, step = from <= to ? 1 : -1) {
    let array = [];
    if (step > 0) {
        for (let i = from; i <= to; i += step) array.push(i);
    }
    if (step < 0) {
        for (let i = from; i >= to; i += step) array.push(i);
    }
    return array;
}

function sum(array) {
    let sum = 0;
    for (let number of array) {
        sum += number;
    }
    return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55