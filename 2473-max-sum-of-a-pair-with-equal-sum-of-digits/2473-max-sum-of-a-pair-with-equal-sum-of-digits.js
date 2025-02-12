/**
 * @param {number[]} nums
 * @return {number}
 */

function getDigitSum(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

var maximumSum = function (nums) {
    const mp = new Map();
    let res = -1;

    for (let num of nums) {
        let key = getDigitSum(num);

        if (!mp.has(key)) {
            mp.set(key, [num, -1]);
        } else {
            let [max1, max2] = mp.get(key);
            if (num > max1) {
                max2 = max1;
                max1 = num;
            } else if (num > max2) {
                max2 = num;
            }
            mp.set(key, [max1, max2]);
        }
    }

    for (let [max1, max2] of mp.values()) {
        if (max2 !== -1) {
            res = Math.max(res, max1 + max2);
        }
    }

    return res;
}
