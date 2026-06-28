/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    const set = new Set(['+', '-', '*', '/']);

    for (const token of tokens) {
        if (set.has(token) && stack.length >= 2) {
            const num1 = stack.pop();
            const num2 = stack.pop();
            let res = 0;
            if (token === '+') {
                res = num1 + num2;
            } else if (token === '-') {
                res = num2 - num1;
            } else if (token === '*') {
                res = num1 * num2;
            } else {
                res = Math.trunc(num2 / num1);
            }
            stack.push(res);
        } else {
            stack.push(+token);
        }
    }

    return stack.pop();
};