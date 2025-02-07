function queryResults(limit: number, queries: number[][]): number[] {
    const n = queries.length;
    const color_freq = new Map<number, number>();
    const ball_color = new Map<number, number>(); // Map for storing ball: color
    const res = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const ball = queries[i][0], color = queries[i][1];

        if (ball_color.has(ball)) { // If ball already colored
            const prevColor = ball_color.get(ball);
            color_freq.set(prevColor, (color_freq.get(prevColor) || 0) - 1);

            if (color_freq.get(prevColor) === 0) {
                color_freq.delete(prevColor);
            }
        }

        // Color the ball
        ball_color.set(ball, color);
        color_freq.set(color, (color_freq.get(color) || 0) + 1);
        res[i] = color_freq.size;
    }

    return res;
}
