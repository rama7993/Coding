function longestPalindrome(s: string): string {
    const n = s.length;
    let start = 0, end = 0;

    const expand = (i, j) => {
        while (i >= 0 && j < n && s[i] === s[j]) {
            if (j - i > end - start) {
                start = i;
                end = j;
            }
            i--; j++;
        }
    }

    for (let mid = 0; mid < n; mid++) {
        expand(mid, mid);
        expand(mid, mid + 1);
    }

    return s.slice(start, end + 1);
};