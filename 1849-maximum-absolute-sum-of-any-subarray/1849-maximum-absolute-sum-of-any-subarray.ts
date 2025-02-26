function maxAbsoluteSum(nums: number[]): number {
    let maxSum = 0, minSum = 0, currentMax = 0, currentMin = 0;

    for (let num of nums) {
        currentMax = Math.max(0, currentMax + num); // max subarray sum
        maxSum = Math.max(maxSum, currentMax);

        currentMin = Math.min(0, currentMin + num); // min subarray sum
        minSum = Math.min(minSum, currentMin);
    }

    return Math.max(maxSum, Math.abs(minSum));
}
