class Solution {
    public int countSymmetricIntegers(int low, int high) {
        int cnt = 0;

        for (int i = low; i <= high; i++) {
            String str = Integer.toString(i);
            int len = str.length();
            if (len % 2 != 0)
                continue;

            int leftSum = 0;
            int rightSum = 0;
            int mid = len / 2;

            for (int j = 0; j < mid; j++) {
                leftSum += str.charAt(j) - '0';
                rightSum += str.charAt(mid + j) - '0';
            }

            if (leftSum == rightSum)
                cnt++;
        }

        return cnt;

    }
}