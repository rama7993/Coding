/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {

    const n = grid.length;
    const totalNumbers = n * n;

    // Expected sum and sum of squares for numbers from 1 to n²
    const expectedSum = (totalNumbers * (totalNumbers + 1)) / 2;
    const expectedSumOfSquares = (totalNumbers * (totalNumbers + 1) * (2 * totalNumbers + 1)) / 6;

    let actualSum = 0, actualSumOfSquares = 0;

    //Actual sum and sum of squares
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            actualSum += grid[i][j];
            actualSumOfSquares += grid[i][j] ** 2;
        }
    }


    // Solving for x and y
    const diff = actualSum - expectedSum; // x - y
    const squareDiff = actualSumOfSquares - expectedSumOfSquares; // x² - y²

    const sum = squareDiff / diff; // x + y
    const repeated = (diff + sum) / 2;
    const missing = sum - repeated;

    return [repeated, missing];
}
