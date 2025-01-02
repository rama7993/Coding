/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const array = [];
    arr.forEach((num, idx) => {
        fn(num, idx) ? array.push(num) : null;
    })
    return array;
};