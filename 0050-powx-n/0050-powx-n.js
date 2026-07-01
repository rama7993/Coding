/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (x === 0) return 0;
    if (n === 0) return 1;

    let ans = 1;
    let pow = Math.abs(n);

    while (pow > 0) {
        if (pow % 2 === 1) ans *= x;
        x *= x;
        pow = Math.floor(pow / 2);
    }

    return n >= 0 ? ans : 1 / ans;
};