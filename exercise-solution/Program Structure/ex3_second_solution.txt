const sharpCell = "#";
const emptyCell = " ";
const newLine = "\n";

//const length = prompt("Input the size");
const length = 10;

let board = "";

for (let row = 1; row <= length; row++) {
    let isEvenRow = row % 2 == 0;

    for(let column = 1; column <= length + 1; column++) {
        if (column == length + 1) {
            board += newLine
            continue;
        }

        let isEvenColumn = column % 2 == 0;

        if (isEvenRow) {
          	board += isEvenColumn ? emptyCell : sharpCell
        } else {
          	board += isEvenColumn ? sharpCell : emptyCell
        }
    }
}

console.log(board);