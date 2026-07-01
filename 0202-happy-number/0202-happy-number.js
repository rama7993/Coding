/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let slow = n, fast = n;

    do {
        slow = squareSum(slow);
        fast = squareSum(squareSum(fast));
    } while (slow !== fast);

    return slow === 1; // fast===1
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