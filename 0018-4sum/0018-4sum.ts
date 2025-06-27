function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const res = [];

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let low = j + 1, high = n - 1;
            while (low < high) {
                const sum = nums[i] + nums[j] + nums[low] + nums[high];
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[low], nums[high]]);
                    low++; high--;

                    while (low < high && nums[low] === nums[low - 1]) low++;
                    while (low < high && nums[high] === nums[high + 1]) high--;
                } else if (sum > target) {
                    high--;
                }
                else {
                    low++;
                }
            }

        }
    }
    return res;
};