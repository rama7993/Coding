/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
    if (s.length < k) return false;

    let bitmask = 0;
    for (const char of s) {
        const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
        bitmask ^= (1 << idx);
    }

    const binary = bitmask.toString(2);
    const oddCount = binary.split('1').length - 1;
    return k >= oddCount;
};