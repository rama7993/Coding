/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    const stack = [];

    for (let char of s) {
        if (stack.length && stack.at(-1) === char) {
            stack.pop()
        }
        else {
            stack.push(char);
        }
    }

    return stack.length ? stack.join('') : '';
};