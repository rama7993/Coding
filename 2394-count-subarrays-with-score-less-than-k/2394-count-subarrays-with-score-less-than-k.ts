function countSubarrays(nums: number[], k: number): number {
    const n = nums.length;
    let left = 0, score = 0;
    let cnt = 0;
    for (let right = 0; right < n; right++) {
        score += nums[right];
        while (score * (right - left + 1) >= k) {
            score -= nums[left++];
        }
        cnt += (right - left + 1);
    }
    return cnt;
}
