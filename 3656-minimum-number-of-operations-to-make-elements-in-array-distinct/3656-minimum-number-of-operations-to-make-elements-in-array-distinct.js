/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    const mp = new Map();
    let ans = 0;

    for (let num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }

    if ([...mp.values()].every((count) => count === 1)) return 0;
    if (nums.length < 3) return 1;

    let i = 0;

    while (i < nums.length) {
        for (let j = i; j < i + 3 && j < nums.length; j++) {
            const val = nums[j];
            mp.set(val, mp.get(val) - 1);
            if (mp.get(val) === 0) {
                mp.delete(val);
            }
        }

        ans++;
        i += 3;

        if ([...mp.values()].every((count) => count === 1)) {
            return ans;
        }
    }

    return ans;
};
