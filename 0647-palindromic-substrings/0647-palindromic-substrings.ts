function countSubstrings(s: string): number {
    const n = s.length;
    let cnt = 0;

    const expand = (i, j) => {
        while (i >= 0 && j < n && s[i] === s[j]) {
            cnt++;
            i--;
            j++;
        }
    }

    for (let mid = 0; mid < n; mid++) {
        expand(mid, mid); //odd
        expand(mid, mid + 1); //even
    }

    return cnt;
};