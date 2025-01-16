function xorAllNums(nums1: number[], nums2: number[]): number {
    const n1 = nums1.length, n2 = nums2.length;
    let res = 0;

    if (n1 % 2 === 1) { // if nums1 has an odd number of elements
        for (const num of nums2) {
            res ^= num;
        }
    }

    if (n2 % 2 === 1) { // if nums2 has an odd number of elements
        for (const num of nums1) {
            res ^= num;
        }
    }

    return res;
}
