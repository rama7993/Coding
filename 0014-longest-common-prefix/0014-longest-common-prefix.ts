function longestCommonPrefix(strs: string[]): string {
    const n = strs.length;
    let res = '';
    strs.sort((a, b) => a.localeCompare(b));
    const left = strs[0], right = strs[n - 1];
    for (let i = 0; i < left.length; i++) {
        if (left[i] === right[i]) {
            res += left[i];
        } else break;
    }
    return res;
};