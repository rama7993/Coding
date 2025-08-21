/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n, res = []) {
    for (const item of arr) {
        if (Array.isArray(item) && n > 0) {
            flat(item, n - 1, res); // reuse the same result array
        } else {
            res.push(item);
        }
    }
    return res;
};
