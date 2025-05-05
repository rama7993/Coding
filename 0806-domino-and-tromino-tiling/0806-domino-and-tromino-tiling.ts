function numTilings(n: number): number {
    const mod = 1e9 + 7;
    const memo = new Map<number, number>();

    function dfs(k: number): number {
        if (k === 0) return 1;
        if (k === 1) return 1;
        if (k === 2) return 2;
        if (memo.has(k)) return memo.get(k)!;

        const result = ((2 * dfs(k - 1)) % mod + dfs(k - 3)) % mod;
        memo.set(k, result);
        return result;
    }

    return dfs(n);
}
