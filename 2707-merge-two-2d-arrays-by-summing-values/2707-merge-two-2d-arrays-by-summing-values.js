/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    const mp = new Map(nums1.map(([x, y]) => [x, y]));

    for (let [x, y] of nums2) {
        if (mp.has(x)) {
            mp.set(x, mp.get(x) + y);
        } else {
            mp.set(x, y);
        }
    }

    return [...mp.entries()].sort(([x1, y1], [x2, y2]) => x1 - x2);

};