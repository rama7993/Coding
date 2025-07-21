function makeFancyString(s: string): string {
    const n = s.length;
    let res = '';
    let cnt = 1;
    for (let i = 0; i < n; i++) {
        if (i > 0 && s[i] === s[i - 1]) {
            cnt++;
        } else {
            cnt = 1;
        }

        if (cnt <= 2) {
            res += s[i];
        }
    }
    return res;
};