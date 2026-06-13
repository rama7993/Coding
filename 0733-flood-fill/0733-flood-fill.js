/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const m = image.length, n = image[0].length;
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const original = image[sr][sc]; // Visit only connected cells with this original color.
    if (original === color) return image;

    const dfs = (x, y) => {
        if (x < 0 || x >= m || y < 0 || y >= n || image[x][y] !== original) return;

        image[x][y] = color;//visited

        for (const [dx, dy] of dir) {
            dfs(x + dx, y + dy);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === sr && j === sc) {
                dfs(i, j);
            }
        }
    }


    return image;
};