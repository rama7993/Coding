class Solution {
    public int longestNiceSubarray(int[] nums) {
        int n = nums.length, left = 0, maxLength = 0;
        int xorSum = 0, currSum = 0;

        for (int right = 0; right < n; right++) {
            currSum += nums[right];
            xorSum ^= nums[right];

            while (xorSum != currSum) {// bitwise AND is not Zero
                currSum -= nums[left];
                xorSum ^= nums[left];
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);

        }

        return maxLength;
    }
}