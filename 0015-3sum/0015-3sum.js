/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < n - 1; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1, r = n - 1;

        while (l < r) {
            const target = nums[i] + nums[l] + nums[r];
            if (target === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++, r--;
            }
            else if (target > 0) r--;
            else l++;
        }

    }

    return res;
};