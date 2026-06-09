/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    //const isAlnum = (ch) => /[a-z0-9]/i.test(ch);
    const isAlnum = (ch) => {
        const reg = new RegExp('[a-z0-9]', 'i');
        return reg.test(ch);
    }

    let i = 0, j = s.length - 1;
    while (i < j) {
        if (!isAlnum(s[i])) i++;
        else if (!isAlnum(s[j])) j--;
        else if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        else {
            i++; j--;
        }

    }
    return true;
};