/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    const isEvenDigits = (num) => num.toString().length % 2 === 0;

    return nums.reduce((count, num) => count + (isEvenDigits(num) ? 1 : 0), 0);
}
