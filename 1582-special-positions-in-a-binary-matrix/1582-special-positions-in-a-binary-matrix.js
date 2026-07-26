/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    const m = mat.length, n = mat[0].length;
    let rows = Array(m).fill(0);
    let cols = Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                rows[i]++;
                cols[j]++;
            }
        }
    }

    let cnt = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
                cnt++;
            }
        }
    }

    return cnt;
};