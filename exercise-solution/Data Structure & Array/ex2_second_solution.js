function reverseArray(array) {
  let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) { 
      reversedArray.push(array[i]);
    }
    return reversedArray;
}

function reverseArrayInPlace(array) {
    let i = 0;
    let opposite = array.length - 1;
    for (; i < array.length / 2; i++, opposite--) {
        let swapper = array[i];
      array[i] = array[opposite];
        array[opposite] = swapper;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]