/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;

    const reverse = (arr, start, end) => {
        while (start < end) {
            const temp = arr[end];
            arr[end] = arr[start];
            arr[start] = temp;
            start++; end--;
        }
    }

    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
};