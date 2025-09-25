function minimumTotal(triangle: number[][]): number {
    const m = triangle.length, n = triangle[0].length;
    const memo = new Map<string, number>();

    const dfs = (i, j) => {
        if (i === m) return 0;

        const key = `${i}#${j}`;
        if (memo.has(key)) return memo.get(key);

        const way1 = dfs(i + 1, j);
        const way2 = dfs(i + 1, j + 1);
        const val = triangle[i][j] + Math.min(way1, way2);
        memo.set(key, val);
        return val;
    }

    return dfs(0, 0);
};
