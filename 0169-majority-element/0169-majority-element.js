/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const mp = {}, n = nums.length;
    for (const val of nums) {
        mp[val] = (mp[val] || 0) + 1;
    }

    for (const [key, count] of Object.entries(mp)) {
        if (count > Math.floor(n / 2)) {
            return Number(key);
        }
    }

    return -1;
};
