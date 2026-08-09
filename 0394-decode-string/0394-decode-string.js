/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = [];
    let curr = '', num = 0;

    for (let ch of s) {
        if (!isNaN(ch)) {
            num = num * 10 + Number(ch);
        } else if (ch === '[') {
            stack.push([curr, num]);
            curr = '';
            num = 0;
        } else if (ch === ']') {
            const [prev, cnt] = stack.pop();
            curr = prev + curr.repeat(cnt);
        } else {
            curr += ch;
        }
    }

    return curr;
};