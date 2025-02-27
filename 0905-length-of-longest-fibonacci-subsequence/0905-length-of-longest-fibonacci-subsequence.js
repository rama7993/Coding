/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
    const indexMap = new Map(); // number: number
    const dp = new Map(); // string: number
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        indexMap.set(arr[i], i);
    }

    for (let k = 0; k < arr.length; k++) {
        for (let j = 0; j < k; j++) {
            const x = arr[k] - arr[j];
            if (x >= arr[j] || !indexMap.has(x)) continue;

            const i = indexMap.get(x);
            const key = `${i},${j}`;

            dp.set(`${j},${k}`, (dp.get(key) ?? 2) + 1);
            maxLength = Math.max(maxLength, dp.get(`${j},${k}`));
        }
    }

    return maxLength > 2 ? maxLength : 0;
};