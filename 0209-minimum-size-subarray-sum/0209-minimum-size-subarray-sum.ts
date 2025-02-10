function minSubArrayLen(target: number, nums: number[]): number {
    const n = nums.length;
    let sum = 0, length = Infinity, start = 0, end = 0;
    while (end < n) {
        sum += nums[end];
        while (sum >= target) {
            length = Math.min(length, end - start + 1);
            sum -= nums[start];
            start++;
        }
        end++;
    }

    return length === Infinity ? 0 : length;
};