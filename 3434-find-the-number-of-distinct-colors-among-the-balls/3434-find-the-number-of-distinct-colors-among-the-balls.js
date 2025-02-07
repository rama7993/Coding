/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
    const color_freq = {}; // Color frequencies
    const ball_color = {}; // Ball-to-color mapping
    const res = new Array(queries.length);
    let uniqueColors = 0; //  unique colors 

    for (let i = 0; i < queries.length; i++) {
        const [ball, color] = queries[i];

        if (ball_color[ball] !== undefined) { // If the ball was already colored
            const prevColor = ball_color[ball];

            color_freq[prevColor]--;
            if (color_freq[prevColor] === 0) {
                delete color_freq[prevColor];
                uniqueColors--; // Reduce unique color count
            }
        }

        // Color the ball
        ball_color[ball] = color;
        if (!color_freq[color]) {
            color_freq[color] = 0;
            uniqueColors++; // New color introduced
        }
        color_freq[color]++;

        res[i] = uniqueColors;
    }

    return res;


};