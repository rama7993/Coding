/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const pairs = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    for (const char of s) {
        const top = stack.at(-1);
        if (char === pairs[top]) {
            stack.pop();
        }
        else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};