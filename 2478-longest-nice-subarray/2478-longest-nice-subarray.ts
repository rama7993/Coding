function longestNiceSubarray(nums: number[]): number {
    const n = nums.length;
    let left = 0, bitwiseOr = 0, maxLength = 0;

    for (let right = 0; right < n; right++) {
        while ((bitwiseOr & nums[right]) != 0) {
            bitwiseOr ^= nums[left];  // Remove left element from OR
            left++;
        }

        bitwiseOr |= nums[right];
        maxLength = Math.max(maxLength, right - left + 1);

    }

    return maxLength;
};