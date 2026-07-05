/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
    const mp = new Map(); // key -> List

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            if (mp.has(i + j)) {
                const arr = mp.get(i + j);
                arr.push(nums[i][j]);
            } else {
                mp.set(i + j, [nums[i][j]]);
            }
        }
    }

    const res = [];

    for (const val of mp.values()) {
        for (let i = val.length - 1; i >= 0; i--) {
            res.push(val[i])
        }
    }
    return res;
};