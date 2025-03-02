function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    let i = 0, j = 0;
    let res: number[][] = [];
    const m = nums1.length, n = nums2.length;

    while (i < m && j < n) {
        if (nums1[i][0] === nums2[j][0]) {
            res.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
            i++; j++
        } else if (nums1[i][0] < nums2[j][0]) {
            res.push(nums1[i]); i++

        } else {
            res.push(nums2[j]); j++
        }
    }

    while (i < m) res.push(nums1[i++]);
    while (j < n) res.push(nums2[j++]);

    return res;
}