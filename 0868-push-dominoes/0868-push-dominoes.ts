function pushDominoes(dominoes: string): string {
    // Add sentinels to simplify edge handling
    const s: string = 'L' + dominoes + 'R';
    const n = s.length;
    let prev = 0;
    let res: string = '';

    for (let curr = 1; curr < n; curr++) {
        if (s[curr] === '.') continue; // Skip until we find next non-dot

        const span = curr - prev - 1;

        // Skip appending sentinel at beginning
        if (prev > 0) res += s[prev];

        // Case 1: Same direction (L...L or R...R)
        // All dominoes in between fall in the same direction
        if (s[prev] === s[curr]) {
            res += s[prev].repeat(span);
        }
        // Case 2: Opposite outward (L...R)
        // No dominoes fall because forces are outward
        else if (s[prev] === 'L' && s[curr] === 'R') {
            res += '.'.repeat(span);
        }
        // Case 3: Opposite inward (R...L)
        // Forces meet in the middle, half fall to right, half to left
        else {
            const half = Math.floor(span / 2);
            const middle = span % 2;
            res += 'R'.repeat(half) + '.'.repeat(middle) + 'L'.repeat(half);
        }

        prev = curr; // Move prev to current for next segment
    }

    return res;
}
