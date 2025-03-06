function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const n = grid.length;
    const arr = Array(2);
    const mp = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const key = grid[i][j];
            if (mp.has(key)) {
                mp.set(key, mp.get(key) + 1);
            } else {
                mp.set(key, 1)
            }
        }
    }

    for (let i = 0; i < n * n; i++) {
        const key = i + 1;
        if (mp.has(key)) {
            if (mp.get(key) === 2) {
                arr[0] = key;
            };
            mp.delete(key);
        } else {
            arr[1] = key;
        }
    }

    return arr;
};