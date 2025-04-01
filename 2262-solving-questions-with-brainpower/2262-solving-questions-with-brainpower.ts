function mostPoints(questions: number[][]): number {
    const n = questions.length;
    const memo = Array(n).fill(-1);

    const ways = (idx) => {
        if (idx >= n) return 0;
        if (memo[idx] !== -1) return memo[idx];

        const way1 = questions[idx][0] + ways(idx + questions[idx][1] + 1);
        const way2 = ways(idx + 1);

        return memo[idx] = Math.max(way1, way2);
    }

    return ways(0);
};