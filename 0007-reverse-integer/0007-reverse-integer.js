/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let num = Math.abs(x), rev = 0;

    while (num) {
        let digit = num % 10;
        rev = rev * 10 + digit
        num = Math.trunc(num / 10);
    }

    if (rev > 2 ** 31 - 1) return 0;

    return x >= 0 ? rev : -rev;
};