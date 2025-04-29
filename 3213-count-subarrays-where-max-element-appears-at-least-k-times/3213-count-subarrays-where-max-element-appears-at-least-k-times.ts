function countSubarrays(nums: number[], k: number): number {
    const n = nums.length;
    let left = 0;
    const max = Math.max(...nums);
    let cnt = 0, ans = 0;
    for (let right = 0; right < n; right++) {
        const num = nums[right];
        if (num === max) cnt++;
        while (cnt >= k) {
            ans += n - right;
            if (nums[left] === max) {
                cnt--;
            }
            left++;
        }
    }

    return ans;
};