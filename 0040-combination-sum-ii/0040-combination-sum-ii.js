/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (nums, target) {
    const n = nums.length;
    const res = [];
    let ans = [];
    nums.sort((a, b) => a - b);

    const dfs = (idx, target) => {
        if (target === 0) {
            res.push([...ans]);
            return;
        }
        for (let i = idx; i < n; i++) {
            if (i > idx && nums[i] === nums[i - 1]) continue;
            if (nums[i] > target) break;
            ans.push(nums[i]);
            dfs(i + 1, target - nums[i]);
            ans.pop();
        }
    }

    dfs(0, target);
    return res;
};