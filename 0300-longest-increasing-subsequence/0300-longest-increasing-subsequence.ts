function lengthOfLIS(nums: number[]): number {
    const n = nums.length;
    const sub: number[] = [];
    for (const num of nums) {
        if ((sub[sub.length - 1] < num) || sub.length == 0) {
            sub.push(num);
        }
        else {
            let idx = lower_bound(sub, num);
            sub[idx] = num;
        }
    }
    return sub.length;
};

function lower_bound(nums: number[], val: number): number {
    let low = 0, high = nums.length;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (nums[mid] < val) {
            low = mid + 1
        } else {
            high = mid;
        }
    }

    return low;
}