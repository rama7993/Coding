function setZeroes(matrix: number[][]): void {
    const m = matrix.length, n = matrix[0].length;
    const set = new Set<string>();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                set.add('r' + i); // mark row i
                set.add('c' + j); // mark column j
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (set.has('r' + i) || set.has('c' + j)) {
                matrix[i][j] = 0;
            }
        }
    }
}
