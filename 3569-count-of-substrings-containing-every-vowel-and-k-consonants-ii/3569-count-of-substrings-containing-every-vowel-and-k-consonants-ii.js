/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
    function isVowel(c) {
        return new Set(['a', 'e', 'i', 'o', 'u']).has(c);
    }

    function atLeastK(word, k) {
        let n = word.length;
        let ans = 0;
        let consonants = 0;
        let left = 0;
        let vowelMap = new Map();

        for (let right = 0; right < n; right++) {
            if (isVowel(word[right])) {
                vowelMap.set(word[right], (vowelMap.get(word[right]) || 0) + 1);
            } else {
                consonants++;
            }

            while (vowelMap.size === 5 && consonants >= k) {
                ans += n - right;
                if (isVowel(word[left])) {
                    vowelMap.set(word[left], vowelMap.get(word[left]) - 1);
                    if (vowelMap.get(word[left]) === 0) {
                        vowelMap.delete(word[left]);
                    }
                } else {
                    consonants--;
                }
                left++;
            }
        }

        return ans;
    }

    return atLeastK(word, k) - atLeastK(word, k + 1);
};
