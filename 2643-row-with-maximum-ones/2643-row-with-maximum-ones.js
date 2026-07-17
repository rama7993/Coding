/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    const m = mat.length; const n = mat[0].length;
    let res = [0, 0], max = -1;

    mat.forEach((row, idx) => {
        let cnt = row.reduce((sum, val) => sum + val, 0);
        if (cnt > max) {
            max = cnt;
            res = [idx, cnt];
        }
    })

    return res;
};