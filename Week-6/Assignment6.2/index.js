const walkMatrix = (matrix) => {
    const result = [];

    const rowCount = matrix.length;
    const columnCount = matrix[0].length;
    let startRow = 0;
    let endRow = rowCount - 1;
    let startColumn = 0;
    let endColumn = columnCount - 1;

    while (endRow >= startRow && endColumn >= startColumn) {
        for (let column = startColumn; column <= endColumn; column++) {
            result.push(matrix[startRow][column]);
        }

        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            result.push(matrix[row][endColumn]);
        }
        endColumn--;

        if (endRow >= startRow) {
            for (let column = endColumn; column >= startColumn; column--) {
                result.push(matrix[endRow][column]);
            }
        }
        endRow--;

        if (endColumn >= startColumn) {

            for (let row = endRow; row >= startRow; row--) {
                result.push(matrix[row][startColumn]);
            }
        }
        startColumn++;
    }

    return result;
};

const n = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(walkMatrix(n))