/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    return Number.isInteger(Math.log10(n) / Math.log10(4))
};