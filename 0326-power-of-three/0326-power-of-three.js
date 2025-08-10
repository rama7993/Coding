/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    return n > 0 && Number.isInteger(Math.log10(n) / Math.log10(3));
};
