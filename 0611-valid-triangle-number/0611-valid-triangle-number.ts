function triangleNumber(nums: number[]): number {
    const n = nums.length;
    if (n < 3) return 0;
    nums.sort((a, b) => a - b);

    let cnt = 0;

    for (let i = n - 1; i > 1; i--) {
        let left = 0, right = i - 1;
        while (left < right) {
            if (nums[left] + nums[right] > nums[i]) {
                cnt += right - left;
                right--;
            } else {
                left++;
            }
        }
    }

    return cnt;
};