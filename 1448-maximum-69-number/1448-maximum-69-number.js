/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    const strg = num.toString().split('');
    for (let i = 0; i < strg.length; i++) {
        if (strg[i] === '6') {
            strg[i] = 9;
            break;
        }
    }

    return +strg.join('');
};