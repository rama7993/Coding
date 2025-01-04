/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    const repeated = new Set();
    let res = 0;
    for (let char of s) {
        repeated.add(char);
    }
    for (let char of repeated) {
        const left = s.indexOf(char);
        const right = s.lastIndexOf(char);
        console.log(left, right)
        const unique_middle = new Set();
        for (let i = left + 1; i < right; i++) {
            unique_middle.add(s[i]);
        }
        res += unique_middle.size;
    }

    return res;
};