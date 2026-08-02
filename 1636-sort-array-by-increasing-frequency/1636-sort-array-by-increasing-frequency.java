class Solution {
    public int[] frequencySort(int[] nums) {
        Map<Integer, Integer> mp = new HashMap<>();
        int n = nums.length;

        for (int num : nums) {
            mp.put(num, mp.getOrDefault(num, 0) + 1);
        }

        Integer[] arr = new Integer[n];
        for (int i = 0; i < n; i++) {
            arr[i] = nums[i];
        }

        Arrays.sort(arr, (a, b) -> {
            int fa = mp.get(a), fb = mp.get(b);
            if (fa == fb)
                return b - a;
            return fa - fb;
        });

        for (int i = 0; i < n; i++) {
            nums[i] = arr[i];
        }

        return nums;
    }
}