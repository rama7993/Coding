/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function (grid) {
    const n = grid.length;
    const mp = new Map();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (mp.has(j - i)) {
                mp.get(j - i).push(grid[i][j]);
            } else {
                mp.set(j - i, [grid[i][j]]);
            }
        }
    }


    for (const [key, val] of mp) {
        val.sort((a, b) => key <= 0 ? a - b : b - a);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = mp.get(j - i).pop();
        }
    }

    return grid;
};