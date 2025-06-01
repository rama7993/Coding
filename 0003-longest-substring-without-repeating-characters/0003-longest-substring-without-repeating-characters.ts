function lengthOfLongestSubstring(s: string): number {
    const set = new Set<string>();
    const n = s.length;
    let ans = 0, left = 0, right = 0;

    for (let right = 0; right < n; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};