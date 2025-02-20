/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    const numSet = new Set(nums); // nums to a Set for O(1) lookup
    const n = nums.length;

    function generate(curr) {
        if (curr.length === n) {
            return numSet.has(curr) ? null : curr;
        }

        return generate(curr + '0') || generate(curr + '1');
    }

    return generate('');
};