function minimumOperations(nums: number[]): number {
    let operations = 0;
    let i = 0;

    while (i < nums.length) {
        const slice = nums.slice(i); // subarray from i to end
        const set = new Set(slice);

        if (set.size === slice.length) {
            return operations;
        }

        i += 3;
        operations++;
    }

    return operations;
}
