
class Solution {
    public int subsetXORSum(int[] nums) {
        int n = nums.length;
        int total = 1 << n;
        int xorTotal = 0;

        for (int i = 0; i < total; i++) {
            int xorSum = 0;
            for (int j = 0; j < n; j++) {
                int mask = 1 << j;
                if ((i & mask) != 0) {
                    xorSum ^= nums[j];
                }
            }
            xorTotal += xorSum;
        }

        return xorTotal;
    }
}