/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    const s = n.toString(2);
    console.log(s);
    let res = 0;
    let l = -1;

    for (let r = 0; r < s.length; r++) {
        if (s[r] === '1') {
            if (l !== -1) {
                res = Math.max(res, r - l);
            }
            l = r;
        }
    }

    return res;
};