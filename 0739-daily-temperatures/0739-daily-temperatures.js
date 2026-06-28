/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const n = temperatures.length;
    const stack = [];
    let res = Array(n).fill(0);

    for (let idx = 0; idx < n; idx++) {
        while (stack.length > 0 && temperatures[stack.at(-1)] < temperatures[idx]) {
            const index = stack.pop();
            res[index] = idx - index;
        }
        stack.push(idx);
    }

    return res;

};