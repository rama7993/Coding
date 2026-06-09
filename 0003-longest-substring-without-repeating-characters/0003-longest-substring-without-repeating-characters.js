/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const n = s.length;
    let i = 0, j = 0;
    const set = new Set();
    let res = 0;

    for (let j = 0; j < n; j++) {
        while (set.has(s[j])) {// shrink left if duplicate found 
            set.delete(s[i]);
            i++;
        }
        set.add(s[j]);
        res = Math.max(res, j - i + 1);
    }

    return res;
};