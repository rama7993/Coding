class Solution {
    public int differenceOfSums(int n, int m) {
        int totalSum = (n * (n + 1)) / 2;
        int pairs = (int) Math.floor(n / m);
        int divisbleSum = m * (pairs * (pairs + 1)) / 2;
        return totalSum - 2 * divisbleSum;
    }
}