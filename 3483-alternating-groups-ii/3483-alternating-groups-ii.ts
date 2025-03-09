function numberOfAlternatingGroups(colors: number[], k: number): number {
    const n = colors.length;
    let left = 0, right = 0, count = 0;
    let validLength = 1;

    while (right < 2 * n - 1) {
        let currIndex = right % n;
        let prevIndex = (right - 1) % n;

        // Expand window if alternating
        if (right > 0 && colors[currIndex] !== colors[prevIndex]) {
            validLength++;
        } else {
            validLength = 1;
            left = right;
        }

        // If window size reaches k
        if (validLength === k) {
            left < n && count++;
            left++;
            validLength--;
        }

        right++; // Expand window
    }

    return count;
}
