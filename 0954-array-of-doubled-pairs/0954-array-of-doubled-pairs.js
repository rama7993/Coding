/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
    const mp = new Map();

    for (const num of arr) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }

    arr.sort((a, b) => Math.abs(a) - Math.abs(b));

    for (const num of arr) {
        if (mp.get(num) === 0) continue;

        const double = 2 * num;
        if (!mp.get(double)) return false;

        mp.set(num, mp.get(num) - 1);
        mp.set(double, mp.get(double) - 1)
    }

    return true;
};