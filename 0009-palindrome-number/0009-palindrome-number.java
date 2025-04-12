class Solution {
    public boolean isPalindrome(int x) {
        int temp = x;
        int reversed = 0;

        while (x > 0) {
            int rem = x % 10;
            reversed = reversed * 10 + rem;
            x = (int) Math.floor(x / 10); // x = x/10;
        }

        return temp == reversed;
    }
}