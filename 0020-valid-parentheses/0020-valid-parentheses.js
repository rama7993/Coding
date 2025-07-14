/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    const stack = [];
    for (let char of s) {
        if (pairs[char]) {
            stack.push(pairs[char]);
        } else {
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};