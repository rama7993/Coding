function checkInclusion(s1: string, s2: string): boolean {
    const mp1 = new Map<string, number>();
    const mp2 = new Map<string, number>();

    for (let char of s1) {
        const val = mp1.get(char) || 0;
        mp1.set(char, val + 1);
    }

    const m = s1.length, n = s2.length;

    for (let i = 0; i < n; i++) {
        const ch = s2[i];
        mp2.set(ch, (mp2.get(ch) || 0) + 1);

        if (i >= m) {
            const outChar = s2[i - m];
            mp2.set(outChar, mp2.get(outChar) - 1);
            if (mp2.get(outChar) === 0) {
                mp2.delete(outChar);
            }
        }

        if (isEqualValues(mp1, mp2)) return true;
    }

    return false;
}


function isEqualValues(mp1: Map<string, number>, mp2: Map<string, number>): boolean {
    if (mp1.size !== mp2.size) return false;
    for (let [key, val] of mp1) {
        if (mp2.get(key) !== val) return false;
    }
    return true;
}