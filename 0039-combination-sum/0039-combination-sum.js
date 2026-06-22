/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = [];
    let ans = [];
    const n = candidates.length;
    candidates.sort((a, b) => a - b); // Sort to enable pruning

    const traversal = (idx, sum) => {
        if (target === sum) {
            res.push([...ans]);
            return;
        }

        for (let i = idx; i < n; i++) {
            if (sum + candidates[i] > target) break;
            ans.push(candidates[i]);
            traversal(i, sum + candidates[i]);
            ans.pop();
        }
    }

    traversal(0, 0);
    return res;
};