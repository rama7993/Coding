/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const res = [];
    for (let i = 1; i <= numRows; i++) {
        const arr = new Array(i).fill(1);
        if (i > 2) {
            for (let j = 1; j < i - 1; j++) {
                arr[j] = res[i - 2][j - 1] + res[i - 2][j]
            }
        }
        res.push(arr);
    }

    return res;
};