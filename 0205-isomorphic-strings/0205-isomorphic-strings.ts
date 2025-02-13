function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const mp1 = new Map();
    const mp2 = new Map();
    for (let i = 0; i < s.length; i++) {
        if (mp1.has(s[i]) && mp1.get(s[i]) !== t[i]) return false;
        if (mp2.has(t[i]) && mp2.get(t[i]) !== s[i]) return false;

        mp1.set(s[i], t[i]);
        mp2.set(t[i], s[i]);
    }
    return true;
};