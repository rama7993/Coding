function minZeroArray(nums: number[], queries: number[][]): number {
    const n = nums.length;

    const canMakeZeroArray = (k: number): boolean => {
        const diff = new Array(n + 1).fill(0);
        for (let i = 0; i < k; i++) {
            const [left, right, val] = queries[i];
            diff[left] += val;
            if (right + 1 < n) diff[right + 1] -= val;
        }
        let currVal = 0;
        for (let i = 0; i < n; i++) {
            currVal += diff[i];
            if (currVal < nums[i]) return false;
        }
        return true;
    };

    if (nums.every(x => x === 0)) return 0;

    let left = 1;
    let right = queries.length;

    if (!canMakeZeroArray(right)) return -1;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (canMakeZeroArray(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}