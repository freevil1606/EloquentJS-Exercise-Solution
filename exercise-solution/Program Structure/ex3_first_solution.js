const sharpCell = "#";
const emptyCell = " ";
const newLine = "\n";

//const length = prompt("Input the size");
const length = 8;

let evenRow = "";
let oddRow = "";

for (let column = 0; column < length; column++) {
    let isEvenColumn = column % 2 == 0
    if (isEvenColumn) {
        evenRow += emptyCell;
        oddRow += sharpCell;
    } else {
        evenRow += sharpCell;
        oddRow += emptyCell;
    }
}

let board = "";

for (let rowIndex = 0; rowIndex < length; rowIndex++) {
    let isEvenRow = rowIndex % 2 == 0;
    board += isEvenRow ? evenRow : oddRow;
    board += newLine;
}

console.log(board);