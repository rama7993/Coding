/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    const evens = [], odds = [];

    for (const num of nums) {
        if (num & 1) odds.push(num);
        else evens.push(num);
    }

    return evens.concat(odds);
};