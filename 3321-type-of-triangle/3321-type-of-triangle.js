/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
    sorted = [...nums].sort((a, b) => a - b);
    if (sorted[0] + sorted[1] <= sorted[2]) {
        return "none";
    } else if (sorted[0] === sorted[2]) {
        return "equilateral";
    } else if (sorted[0] === sorted[1] || sorted[1] === sorted[2]) {
        return "isosceles";
    } else {
        return "scalene";
    }
};
