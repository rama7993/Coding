/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    const n = A.length, freq = Array(n + 1).fill(0), res = Array(n);
    let common = 0;
    for (let idx = 0; idx < n; idx++) {
        if (++freq[A[idx]] === 2) common++;
        if (++freq[B[idx]] === 2) common++;
        res[idx] = common;
    }
    return res;
};