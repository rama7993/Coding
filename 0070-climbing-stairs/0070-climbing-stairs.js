/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let prev1 = 1, prev2 = 1;
    for (let i = 2; i < n + 1; i++) {
        let temp = prev1;
        prev1 = prev2;
        prev2 = temp + prev2;
    }

    return prev2;
};