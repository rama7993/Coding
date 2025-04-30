class Solution {
    public int findNumbers(int[] nums) {
        int cnt = 0;
        for (int num : nums) {
            int digits = (int) Math.floor(Math.log10(num)) + 1;

            cnt += digits % 2 == 0 ? 1 : 0;
        }
        return cnt;
    }
}