/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const n = nums.length;
    const res = [];
    nums.sort((a, b) => a - b);
    let ans = [];

    const dfs = (idx) => {
        res.push([...ans]);

        for (let i = idx; i < n; i++) {
            if (i > idx && nums[i] === nums[i - 1]) continue;
            ans.push(nums[i]);
            dfs(i + 1);
            ans.pop();
        }
    }

    dfs(0);
    return res;
};