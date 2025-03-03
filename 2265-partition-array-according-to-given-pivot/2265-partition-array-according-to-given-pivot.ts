function pivotArray(nums: number[], pivot: number): number[] {
    const n = nums.length;
    let smaller = [], middle = [], bigger = [];
    let i = 0;
    while (i < n) {
        if (nums[i] < pivot) {
            smaller.push(nums[i]);
        }

        else if (nums[i] == pivot) {
            middle.push(nums[i])
        }

        else {
            bigger.push(nums[i]);
        }
        i++;
    }

    return smaller.concat(middle, bigger);
};