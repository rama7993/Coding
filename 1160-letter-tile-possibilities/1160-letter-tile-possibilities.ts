function numTilePossibilities(tiles: string): number {
    const freq = new Map<string, number>();

    // Populate frequency map
    for (const ch of tiles) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    function backtrack(): number {
        let count = 0;
        for (const [ch, val] of freq.entries()) {
            if (val > 0) {
                // Use this character
                freq.set(ch, val - 1);

                count += 1 + backtrack();
                // Backtrack
                freq.set(ch, val);
            }
        }
        return count;
    }

    return backtrack();
}
