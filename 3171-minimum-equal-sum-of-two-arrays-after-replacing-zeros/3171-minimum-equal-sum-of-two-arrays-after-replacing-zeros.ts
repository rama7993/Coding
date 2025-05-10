function minSum(nums1: number[], nums2: number[]): number {
    let zeroes1 = 0, zeroes2 = 0;
    let sum1 = 0, sum2 = 0;

    for (let num of nums1) {
        if (num === 0) zeroes1++;
        sum1 += num;
    }

    for (let num of nums2) {
        if (num === 0) zeroes2++;
        sum2 += num;
    }

    const min1 = sum1 + zeroes1, min2 = sum2 + zeroes2;

    if (zeroes1 === 0 && zeroes2 === 0) {// Both have no zeros
        return sum1 == sum2 ? sum1 : -1;
    } else if (zeroes2 === 0) { // Only nums2 has zeros
        return min1 <= sum2 ? sum2 : -1;
    } else if (zeroes1 === 0) {// Only nums1 has zeros
        return min2 <= sum1 ? sum1 : -1;
    }

    return Math.max(min1, min2);
};