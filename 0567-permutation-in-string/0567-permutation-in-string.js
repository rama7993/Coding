/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const m = s1.length, n = s2.length;
    if (m > n) return false;

    const mp1 = new Map(), mp2 = new Map();
    let l = 0;
    for (const ch of s1) {
        mp1.set(ch, (mp1.get(ch) || 0) + 1);
    }

    for (let r = 0; r < n; r++) {
        mp2.set(s2.charAt(r), (mp2.get(s2.charAt(r)) || 0) + 1);

        while (r - l + 1 > m) {
            const ch = s2.charAt(l);
            mp2.set(ch, mp2.get(ch) - 1);
            if (mp2.get(ch) === 0) mp2.delete(ch);
            l++;
        }

        if (r - l + 1 === s1.length && isEqual(mp1, mp2))
            return true;
    }
    return false;
};

var isEqual = function (a, b) {
    if (a.size !== b.size) return false;

    for (const [key, val] of a) {
        if (!b.has(key) || val !== b.get(key)) return false;
    }
    return true;
}