/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const n = s.length;
    const freq = new Map();
    for (const char of t) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    const mp = new Map();
    let l = 0, res = '';

    for (let r = 0; r < n; r++) {
        mp.set(s[r], (mp.get(s[r]) || 0) + 1);
        while (contains(mp, freq)) {
            const currLength = r - l + 1;

            if (res === '' || currLength < res.length) {// smallest window
                res = s.slice(l, r + 1);
                //console.log(res);
            }

            mp.set(s[l], mp.get(s[l]) - 1);
            l++;
        }
    }

    return res;
};

var contains = (window, target) => {
    for (const [key, val] of target) {
        if ((window.get(key) || 0) < val) return false;
    }
    return true;
}