/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    const n = s2.length, arr = s1.split('');
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; //swap
            if (arr.join('') === s2) return true;
            [arr[i], arr[j]] = [arr[j], arr[i]]; //restore
        }
    }
    return false;
};