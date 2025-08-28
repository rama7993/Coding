function searchRange(nums: number[], target: number): number[] {
    let lb = lowerbound(nums, target);
    let ub = upperbound(nums, target) - 1;//lands after the last match.

    if (lb <= ub && nums[lb] === target && nums[ub] === target) {
        return [lb, ub];
    }

    return [-1, -1];
};


function lowerbound(arr, val) {
    let low = 0, high = arr.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] < val) {
            low = mid + 1
        } else {
            high = mid;
        }
    }
    return low;
}

function upperbound(arr, val) {
    let low = 0, high = arr.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] <= val) {
            low = mid + 1
        } else {
            high = mid;
        }
    }
    return low;
}

