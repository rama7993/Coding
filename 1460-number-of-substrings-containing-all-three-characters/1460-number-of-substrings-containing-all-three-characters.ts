function numberOfSubstrings(s: string): number {
    const map = new Map<string, number>();
    let count = 0, left = 0;

    for (let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);

        while (map.get('a') && map.get('b') && map.get('c')) {
            count += s.length - right;
            map.set(s[left], map.get(s[left])! - 1);
            if (map.get(s[left]) === 0) map.delete(s[left]);
            left++;
        }
    }

    return count;
}
