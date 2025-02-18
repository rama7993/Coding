/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
    const n = pattern.length, stack = [];
    let res = '';
    for (let i = 0; i < n + 1; i++) {
        stack.push(i + 1);
        if (i === n || pattern[i] === 'I') {
            while (stack.length > 0) {
                res += stack.pop();
            }
        }
    }
    return res;
};