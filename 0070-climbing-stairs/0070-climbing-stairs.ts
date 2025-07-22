function climbStairs(n: number): number {
    const cache = {};
    const func = (n) => {
        if (n === 0 || n === 1) return 1;
        if (n in cache) return cache[n];
        const res = func(n - 1) + func(n - 2);
        cache[n] = res;
        return res;
    }

    return func(n);
};