/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    const stack = []; // {char, cnt};

    for (let char of s) {
        if (stack.length && stack.at(-1).char === char) {
            let prev = stack.at(-1);
            prev.cnt += 1;
            if (prev.cnt === k) {
                stack.pop();
            }
        }
        else {
            stack.push({ char, cnt: 1 });
        }
    }

    return stack.map(item => item.char.repeat(item.cnt)).join('');
};