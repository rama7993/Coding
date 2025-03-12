function maximumCount(nums: number[]): number {
    let positive = 0, negative = 0;
    for (let num of nums) {
        if (num > 0) positive++;
        else if (num < 0) negative++;
    }

    return Math.max(positive, negative);
};