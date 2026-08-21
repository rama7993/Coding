class Solution {
    private boolean canEat(int[] items, int mid, int total) {
        int hours = 0;
        for (int item : items) {
            hours += Math.ceilDiv(item, mid);
        }
        return hours <= total;
    }

    public int minEatingSpeed(int[] piles, int h) {
        int low = 1, high = 0;
        // int high = Arrays.stream(piles).max().getAsInt();
        for (int pile : piles) {
            high = Math.max(high, pile);
        }

        while (low < high) {
            int mid = low + (high - low) / 2;

            if (canEat(piles, mid, h)) {
                high = mid;
            } else {
                low = mid + 1;
            }

        }
        return high;// low
    }
}