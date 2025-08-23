function peakIndexInMountainArray(arr: number[]): number {
    const n = arr.length;
    let low = 0, high = n - 1;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid + 1] > arr[mid]) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return low;//high
};