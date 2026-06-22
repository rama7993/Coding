/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = [];
    let ans = [];
    const n = candidates.length;

    const traversal = (idx, target) => {
        if (target < 0) return;

        if (target === 0) {
            res.push([...ans]);
            return;
        }

        for (let i = idx; i < n; i++) {
            ans.push(candidates[i]);
            traversal(i, target - candidates[i]);
            ans.pop();
        }
    }

    traversal(0, target);
    return res;
};