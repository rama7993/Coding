/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let sum = init;
    nums.forEach((num, idx) => {
        sum = fn(sum, num);
    });
    return sum;
};