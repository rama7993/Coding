function thirdMax(nums: number[]): number {
    let first = -Infinity, second = -Infinity, third = -Infinity;

    for (const num of nums) {
        if (num === first || num === second || num === third) continue; //duplicates

        if (num > first) {
            [first, second, third] = [num, first, second];
        } else if (num > second) {
            [second, third] = [num, second];
        } else if (num > third) {
            third = num;
        }
    }

    return third === -Infinity ? first : third;
};