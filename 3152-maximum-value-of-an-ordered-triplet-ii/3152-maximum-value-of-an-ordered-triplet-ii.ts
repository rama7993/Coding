function maximumTripletValue(nums: number[]): number {
    const n = nums.length;
    let res = 0;

    const leftMax = Array(n).fill(0), rightMax = Array(n).fill(0);
    leftMax[0] = nums[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], nums[i]);
    }
    rightMax[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
    }

    for (let i = 1; i < n - 1; i++) {
        const left = leftMax[i - 1];
        const right = rightMax[i + 1];
        res = Math.max(res, (left - nums[i]) * right);
    }

    return res;
};