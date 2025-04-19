function countFairPairs(nums: number[], lower: number, upper: number): number {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    let cnt = 0;


    const lowerBound = (target: number, start: number) => {
        let low = start, high = n;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (nums[mid] < target) {
                low = mid + 1
            } else {
                high = mid;
            }
        }
        return low;
    }

    const upperBound = (target: number, start: number) => {
        let low = start, high = n;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (nums[mid] <= target) {
                low = mid + 1
            } else {
                high = mid;
            }
        }
        return low;
    }

    //lower - nums[i] <= nums[j] <= upper - nums[i]
    for (let i = 0; i < n; i++) {
        const left = lowerBound(lower - nums[i], i + 1); // nums[i]>=target
        const right = upperBound(upper - nums[i], i + 1); // nums[i]>target
        cnt += right - left;
    }

    return cnt;
};


