/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const seen = new Set();
    while (!seen.has(n)) {
        seen.add(n);
        n = squareSum(n);
        if (n === 1) return true;
    }
    return false;
};

var squareSum = function (n) {
    let sum = 0;

    while (n) {
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }

    return sum;
}