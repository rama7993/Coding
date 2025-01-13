function minimumLength(s: string): number {
    const mp: { [key: string]: number } = {};
    for (const char of s) {
        mp[char] = (mp[char] || 0) + 1;
    }

    for (const [key, count] of Object.entries(mp)) {
        if (count % 2 === 1) {
            mp[key] = 1;
        } else {
            mp[key] = 2;
        }
    }

    return Object.values(mp).reduce((acc, curr) => acc + curr, 0);
};