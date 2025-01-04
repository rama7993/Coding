function countPalindromicSubsequence(s: string): number {
    const n = s.length;
    const left_index: number[] = Array(26).fill(-1);
    const right_index: number[] = Array(26).fill(n);

    for (let i = 0; i < n; i++) {
        const index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (left_index[index] === -1) left_index[index] = i; // First occurrence
        right_index[index] = i; // Last occurrence
    }

    const set = new Set<string>();
    // palindromic subsequences of length 3 (a_x_a)
    for (let i = 0; i < 26; i++) {
        if (left_index[i] !== -1 && right_index[i] !== n && left_index[i] < right_index[i]) { // if present in string
            for (let j = left_index[i] + 1; j < right_index[i]; j++) {
                const subseq = `${String.fromCharCode(i + 'a'.charCodeAt(0))}${s[j]}${String.fromCharCode(i + 'a'.charCodeAt(0))}`;
                //console.log(subseq);
                set.add(subseq);
            }
        }
    }

    return set.size;
};