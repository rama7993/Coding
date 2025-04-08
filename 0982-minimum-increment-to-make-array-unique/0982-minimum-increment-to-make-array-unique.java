class Solution {
    public int minIncrementForUnique(int[] nums) {
        int n = nums.length;
        int res = 0;
        Arrays.sort(nums);

        for (int i = 1; i < n; i++) {
            int prev = nums[i - 1], curr = nums[i];
            nums[i] = Math.max(prev + 1, curr);
            res += nums[i] - curr;
        }

        return res;
    }
}