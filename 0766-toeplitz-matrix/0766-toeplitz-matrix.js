/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    const m = matrix.length, n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i >= 1 && j >= 1 && matrix[i][j] !== matrix[i - 1][j - 1]) return false;
        }
    }

    return true;
};