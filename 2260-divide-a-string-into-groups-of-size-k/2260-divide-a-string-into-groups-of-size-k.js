/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    const n = s.length;
    let res = [];

    for (let i = 0; i < n; i += k) {
        let group = s.slice(i, i + k);
        if (group.length < k) {
            group += fill.repeat(k - group.length);
        }
        res.push(group);
    }


    return res;
};