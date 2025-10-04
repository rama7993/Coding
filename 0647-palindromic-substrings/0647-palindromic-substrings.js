/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    const n = s.length;
    let cnt = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (isPalindrome(s.slice(i, j))) cnt++;
        }
    }

    return cnt;
};

function isPalindrome(str) {
    const n = str.length;
    let i = 0, j = n - 1;

    while (i < j) {
        if (str[i] !== str[j]) return false;
        i++; j--;
    }
    return true;
}