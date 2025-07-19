/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let i = num.length - 1;
    while (i >= 0) {
        const rem = parseInt(num[i]);
        if (rem % 2 === 1) {
            return num.slice(0, i + 1);
        }
        i--;
    }
    return '';
};