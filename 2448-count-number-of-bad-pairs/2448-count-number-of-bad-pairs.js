/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
    const n = nums.length, freq = {};
    let goodPairs = 0;
    for (let i = 0; i < n; i++) {
        const key = nums[i] - i;
        goodPairs += (freq[key] || 0);
        freq[key] = (freq[key] || 0) + 1;
    }

    return (n * (n - 1)) / 2 - goodPairs;
};