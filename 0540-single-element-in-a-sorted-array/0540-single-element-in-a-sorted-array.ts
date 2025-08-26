function singleNonDuplicate(nums: number[]): number {
    const n = nums.length;
    let left = 0, right = n - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (mid % 2 === 1) mid-- //shift back if odd

        if (nums[mid] === nums[mid + 1]) {
            left = mid + 2;
        } else {
            right = mid;
        }

    }
    return nums[left];
};