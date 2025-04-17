function countPairs(nums: number[], k: number): number {
    let cnt = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j] && (i * j) % k === 0) {
                cnt++;
            }
        }
    }
    return cnt;
};