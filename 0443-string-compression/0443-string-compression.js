/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let idx = 0; // write;
    let cnt = 1;

    for (let i = 1; i <= chars.length; i++) {
        if (chars[i - 1] === chars[i]) {
            cnt++;
        } else {
            chars[idx++] = chars[i - 1];
            if (cnt > 1) {
                for (let d of cnt.toString()) {
                    chars[idx++] = d;
                }
            }
            cnt = 1;
        }
    }

    return idx;
};