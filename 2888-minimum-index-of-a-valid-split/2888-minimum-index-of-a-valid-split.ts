function minimumIndex(nums: number[]): number {
    const n = nums.length;
    const dominant = getMajorElement(nums);

    let leftCount = 0;
    let totalCount = nums.filter(num => num === dominant).length;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === dominant) {
            leftCount++;
        }

        const leftSize = i + 1, rightSize = n - leftSize;
        const rightCount = totalCount - leftCount;

        // dominant element  > half in both subarrays
        if (leftCount * 2 > leftSize && rightCount * 2 > rightSize) {
            return i;
        }
    }
    return -1;
};

function getMajorElement(nums: number[]): number {
    let cand = null, count = 0;
    for (let num of nums) {
        if (count === 0) {
            cand = num;
            count = 1;
        } else if (cand === num) {
            count += 1;
        } else {
            count -= 1;
        }
    }
    return cand;
}