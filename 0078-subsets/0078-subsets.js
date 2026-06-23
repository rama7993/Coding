/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [];
    const n = nums.length;

    const explore = (idx, ans) => {
        res.push([...ans]);

        for (let i = idx; i < n; i++) {
            ans.push(nums[i]);
            explore(i + 1, ans);
            ans.pop();
        }
    }

    explore(0, []);

    return res;
};