function minimumRecolors(blocks: string, k: number): number {
    const n = blocks.length;
    let whiteCount = 0, left = 0, ans = Infinity;

    for (let right = 0; right < n; right++) {
        if (blocks[right] === 'W') whiteCount++;

        if (right - left + 1 === k) {
            ans = Math.min(ans, whiteCount);
            if (blocks[left] === 'W') whiteCount--;
            left++;
        }

    }
    return ans;
};