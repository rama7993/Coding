/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    const chars = ['a', 'b', 'c'];
    let res = [];

    var backtrack = function (curr) {
        if (curr.length === n) {
            res.push(curr);
            return;
        }

        for (let char of chars) {
            if (curr.length === 0 || curr[curr.length - 1] !== char) {
                backtrack(curr + char);
            }
        }
    };

    backtrack('');
    return res[k - 1] ?? '';
};
