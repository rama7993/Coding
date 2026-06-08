/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const strg = s.replace(/[^A-Za-z0-9]+/g, '').toLowerCase();
    return strg == strg.split('').reverse().join('');
};