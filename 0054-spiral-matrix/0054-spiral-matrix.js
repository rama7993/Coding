/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const m = matrix.length, n = matrix[0].length;
    const res = [];

    let top = 0, right = n - 1, bottom = m - 1, left = 0;

    while (left <= right && top <= bottom) {
        // left -> right
        for (let j = left; j <= right; j++) {
            res.push(matrix[top][j]);
        }
        top++;

        // right -> bottom
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;

        if (top > bottom || left > right) break;

        // bottom -> left
        for (let j = right; j >= left; j--) {
            res.push(matrix[bottom][j]);
        }
        bottom--

        // left -> top
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left])
        }
        left++;

    }

    return res;
};