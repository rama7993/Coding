/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
    const freq = new Array(10).fill(0);
    for (const d of digits) freq[d]++;
    const res = [];

    for (let num = 100; num < 1000; num += 2) {
        const hundreds = Math.floor(num / 100);
        const tens = Math.floor((num % 100) / 10);
        const ones = num % 10;

        const count = new Array(10).fill(0);
        count[hundreds]++;
        count[tens]++;
        count[ones]++;

        if (
            count[hundreds] <= freq[hundreds] &&
            count[tens] <= freq[tens] &&
            count[ones] <= freq[ones]
        ) {
            res.push(num);
        }

    }

    return res;
};