/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    const rowCount = Array(m).fill(0);
    const colCount = Array(n).fill(0);

    // Count servers in each row and column
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }

    let count = 0;

    // Count servers that can communicate
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && (rowCount[i] > 1 || colCount[j] > 1)) {
                count++;
            }
        }
    }

    return count;


};