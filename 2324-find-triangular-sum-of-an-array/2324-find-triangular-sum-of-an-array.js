/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    const arr = nums;
    const n = nums.length;
    let cnt = n;

    while (cnt > 0) {
        for (let i = 1; i < cnt; i++) {
            arr[i - 1] = (arr[i - 1] + arr[i]) % 10;
        }
        cnt--;
    }

    return arr[0];
};