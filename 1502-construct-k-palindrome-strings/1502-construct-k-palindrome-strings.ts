function canConstruct(s: string, k: number): boolean {
    const mp: { [key: string]: number } = {};
    for (let char of s) {
        mp[char] = (mp[char] || 0) + 1;
    }
    let oddCount = 0;
    for (const char in mp) {
        if (mp[char] % 2 === 1) {
            oddCount++;
        }
    }
    return k >= oddCount && k <= s.length;
}
