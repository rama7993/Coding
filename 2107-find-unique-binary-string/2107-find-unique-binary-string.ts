function findDifferentBinaryString(nums: string[]): string {
    const chars = ['0', '1'];
    const n = nums[0].length;
    let res = '';

    function permutate(curr: string) {
        if (curr.length === n) {
            if (nums.includes(curr)) return;
            else {
                res = curr;
                return;
            }
        }

        for (const char of chars) {
            permutate(curr + char)
        }
    }

    permutate('');
    return res;
};