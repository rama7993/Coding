function canPartition(nums: number[]): boolean {
    const total = nums.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return false;
    const target = total / 2;
    const n = nums.length;

    const memo: Map<number, Map<number, boolean>> = new Map();

    function dfs(idx: number, currSum: number): boolean {
        if (currSum === target) return true;
        if (currSum > target || idx === n) return false;

        if (memo.has(idx) && memo.get(idx).has(currSum)) {
            return memo.get(idx).get(currSum);
        }

        const include = dfs(idx + 1, currSum + nums[idx]);
        const exclude = dfs(idx + 1, currSum);
        const result = include || exclude;

        if (!memo.has(idx)) {
            memo.set(idx, new Map());
        }
        memo.get(idx).set(currSum, result);

        return result;
    }

    return dfs(0, 0);
}
