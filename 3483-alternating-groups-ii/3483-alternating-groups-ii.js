/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
    const n = colors.length;
    let count = 0, left = 0;

    for (let right = 0; right < n + k - 1; right++) {
        if (right > 0 && colors[right % n] === colors[(right - 1) % n]) {
            left = right;
        }

        if (right - left + 1 >= k) {
            count++;
        }
    }

    return count;
};