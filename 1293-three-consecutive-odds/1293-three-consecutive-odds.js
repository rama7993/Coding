/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    let odds = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] & 1) odds++;
        else odds = 0;
        if (odds === 3) return true;
    };

    return false;
}