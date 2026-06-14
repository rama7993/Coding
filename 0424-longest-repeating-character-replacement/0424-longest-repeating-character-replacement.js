/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const n = s.length;
    let left = 0, right = 0;
    const freq = {};
    let maxFreq = 0, ans = 0;

    for (; right < n; right++) {
        freq[s[right]] = (freq[s[right]] || 0) + 1;
        maxFreq = Math.max(maxFreq, freq[s[right]]);
        // windowsize - maxFreq <= k (valid replacements)

        while ((right - left + 1) - maxFreq > k) {
            freq[s[left]]--;
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }

    return ans;

};