/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
    for (let i = n; i <= n + 10; i++) {
        let num = i;
        let product = [...num.toString()].reduce((acc, curr) => acc * Number(curr), 1);
        if (product % t === 0) {
            return num;
        }
    }

    return -1;
};