function subsets(nums: number[]): number[][] {
    const res = [];
    const n = nums.length;

    const subsets = (idx, path) => {
        if (idx === n) {
            res.push([...path]);
            return;
        }
        subsets(idx + 1, path);
        path.push(nums[idx]);
        subsets(idx + 1, path);
        path.pop();
    }

    subsets(0, []);
    return res;
};