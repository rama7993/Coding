/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    let cnt = 0;
    let left = 0;
    for (let right = 0; right < n; right++) {
        while ((prefix[right + 1] - prefix[left]) * (right - left + 1) >= k) {
            left++;
        }
        cnt += (right - left + 1);
    }

    return cnt;
};