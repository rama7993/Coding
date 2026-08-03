/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    let low = 1, high = Math.max(...nums);

    const canDivide = (mid) => {
        const sum = nums.reduce((acc, curr) => {
            acc += Math.ceil(curr / mid);
            return acc;
        }, 0);
        return sum <= threshold;
    }

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (canDivide(mid)) {
            high = mid;
        } else {
            low = mid + 1
        }
    }

    return high;
};