function numberOfPowerfulInt(start: number, finish: number, limit: number, s: string): number {
    function count(val: number): number {
        const numberStr = val.toString();
        const prefixLength = numberStr.length - s.length;

        if (prefixLength < 0) return 0;

        const dp: number[][] = Array.from({ length: prefixLength + 1 }, () => [0, 0]);

        dp[prefixLength][0] = 1;
        dp[prefixLength][1] = numberStr.slice(prefixLength) >= s ? 1 : 0;

        for (let i = prefixLength - 1; i >= 0; i--) {
            const currentDigit = parseInt(numberStr[i]);

            // Not tight → can use any digit from 0 to limit
            dp[i][0] = (limit + 1) * dp[i + 1][0];

            // Tight case → digit must respect the current digit in numberStr
            if (currentDigit <= limit) {
                dp[i][1] = currentDigit * dp[i + 1][0] + dp[i + 1][1];
            } else {
                dp[i][1] = (limit + 1) * dp[i + 1][0];
            }
        }

        return dp[0][1];
    }

    return count(finish) - count(start - 1);
}
