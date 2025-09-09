function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
    const MOD = 1e9 + 7;
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    let share = 0;

    for (let day = 2; day <= n; day++) {
        if (day > delay) {
            share = (share + dp[day - delay]) % MOD;
        }
        if (day > forget) {
            share = (share - dp[day - forget] + MOD) % MOD;
        }

        dp[day] = share;
    }

    let total = 0;

    for (let day = n - forget + 1; day <= n; day++) {
        if (day > 0) {
            total = (total + dp[day]) % MOD;
        }
    }

    return total;
};