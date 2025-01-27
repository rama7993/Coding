/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let res = [], n = arr.length;
    let start = 0, end = size;
    while (end < n + size) {
        const chunk = end < n ? arr.slice(start, end) : arr.slice(start);
        chunk.length && res.push(chunk);
        start = end;
        end = start + size;
    }
    return res;
};
