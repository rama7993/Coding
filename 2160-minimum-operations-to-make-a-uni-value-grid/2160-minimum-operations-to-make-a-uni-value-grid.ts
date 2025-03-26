function minOperations(grid: number[][], x: number): number {
    const nums = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            nums.push(grid[i][j]);
        }
    }

    const remainder = nums[0] % x;
    for (let num of nums) {
        if (num % x !== remainder) return -1;
    }

    nums.sort((a, b) => a - b);
    const n = nums.length;
    const median = nums[Math.floor(n / 2)];

    let count = 0;
    for (let num of nums) {
        count += Math.abs(num - median) / x;
    }

    return count;
};