/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const n = height.length;
    const prefix = new Array(n).fill(0);
    const suffix = new Array(n).fill(0);
    prefix[0] = height[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = Math.max(prefix[i - 1], height[i]);
    }
    suffix[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = Math.max(suffix[i + 1], height[i]);
    }

    let res = 0;
    for (let i = 0; i < n; i++) {
        res += Math.min(prefix[i], suffix[i]) - height[i];
    }

    return res;

};