/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    const n = num.length;
    let res = -1, cnt = 1;
    const k = 3;

    for (let i = 1; i < n; i++) {
        if (num[i] === num[i - 1]) cnt++;
        else { cnt = 1 }
        if (cnt >= k) {
            res = Math.max(res, num[i]);
        }

    }

    return res === -1 ? '' : res.toString().repeat(k);
};