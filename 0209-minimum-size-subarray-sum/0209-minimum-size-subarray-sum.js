/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    const n = nums.length;
    let minLength = Infinity;
    const prefixSum = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
    }

    for (let start = 0; start < n; start++) {
        let requiredSum = prefixSum[start] + target;
        let end = binarySearch(prefixSum, requiredSum);
        if (end !== -1) {
            minLength = Math.min(minLength, end - start);
        }
    }
    return minLength === Infinity ? 0 : minLength;
};

var binarySearch = function (prefixSum, target) {
    let left = 0, right = prefixSum.length - 1;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (prefixSum[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return prefixSum[right] >= target ? right : -1; // left or right
}