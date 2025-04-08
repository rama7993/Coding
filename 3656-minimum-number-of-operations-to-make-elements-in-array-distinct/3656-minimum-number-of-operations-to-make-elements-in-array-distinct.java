class Solution {
    public int minimumOperations(int[] nums) {
        Set<Integer> seen = new HashSet<>();

        for (int i = nums.length - 1; i >= 0; i--) {
            int num = nums[i];
            if (seen.contains(num)) {
                return (i + 3) / 3;
            }
            seen.add(num);
        }

        return 0;
    }
}