/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    const m = mat.length, n = mat[0].length;
    const grid = Array.from({ length: r }, () => Array(c));
    let total = m * n;

    if (total !== r * c) return mat;

    for (let i = 0; i < total; i++) {
        const newRow = Math.floor(i / c);
        const oldRow = Math.floor(i / n);

        grid[newRow][i % c] = mat[oldRow][i % n];
    }

    return grid;
};