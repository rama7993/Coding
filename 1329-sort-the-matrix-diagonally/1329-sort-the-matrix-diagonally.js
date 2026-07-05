/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
    const m = mat.length, n = mat[0].length;
    const mp = new Map();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!mp.has(j - i)) {
                mp.set(j - i, []);
            }

            mp.get(j - i).push(mat[i][j]);
        }
    }


    for (const val of mp.values()) {
        val.sort((a, b) => b - a);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            mat[i][j] = mp.get(j - i).pop();
        }
    }

    return mat;
};
