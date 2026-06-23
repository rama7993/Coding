/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const n = nums.length;
    const res = [];

    const dfs = (idx) => {
        // Positions [0 .. idx-1] are already fixed. Choose position idx
        if (idx === n) {
            res.push([...nums]);
            return;
        }
        for (let i = idx; i < n; i++) {
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
            dfs(idx + 1);
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
        }
    }

    dfs(0);
    return res;
};