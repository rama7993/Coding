function strStr(haystack: string, needle: string): number {
    const n = haystack.length;
    const m = needle.length;

    const lps = buildLPS(needle);
    let i = 0, j = 0;
    while (i < n) {
        if (haystack[i] === needle[j]) {
            i++; j++;
            if (j === m) {
                return i - j;
                //j = lps[j - 1];
            }
        } else { //mismatch
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    return -1;
};


function buildLPS(pattern) {
    const n = pattern.length;
    const lps = Array(n).fill(0);
    let len = 0, i = 1;
    while (i < n) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i++] = len;
        } else { //mismatch
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i++] = 0;
            }
        }
    }
    return lps;
} 