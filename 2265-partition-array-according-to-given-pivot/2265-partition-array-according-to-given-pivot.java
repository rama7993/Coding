class Solution {
    public int[] pivotArray(int[] nums, int pivot) {
        int n = nums.length;
        int[] res = new int[n];

        int i = 0, j = n - 1;
        int left = 0, right = n - 1;

        while (i < n) {
            if (nums[i] < pivot)
                res[left++] = nums[i];
            if (pivot < nums[j])
                res[right--] = nums[j];

            i++;
            j--;
        }

        while (left <= right) {
            res[left++] = pivot;
        }

        return res;
    }
}