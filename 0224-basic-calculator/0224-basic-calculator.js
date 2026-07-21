/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const res = Function('return (' + s + ')')();
    return res;
};