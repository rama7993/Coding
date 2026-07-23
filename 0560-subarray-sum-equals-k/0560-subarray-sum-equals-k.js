/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const mp = new Map();
    mp.set(0, 1);
    let prefix = 0, cnt = 0;

    for (const num of nums) {
        prefix += num;
        if (mp.has(prefix - k)) {
            cnt += mp.get(prefix - k);
        }
        mp.set(prefix, (mp.get(prefix) || 0) + 1);
    }

    return cnt;
};