/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    const n = arr.length;
    let low = 0, high = n - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (mid > 0 && mid < n - 1 && arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        else if (arr[mid] < arr[mid + 1]) {//slope is increasing, move right
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};