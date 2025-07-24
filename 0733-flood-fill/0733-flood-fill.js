/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const m = image.length, n = image[0].length;
    const orgColor = image[sr][sc];
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const queue = [[sr, sc]];
    if (orgColor === color) return image;

    while (queue.length > 0) {
        const [x, y] = queue.shift();
        if (image[x][y] === orgColor) {
            image[x][y] = color;
            for (let [dx, dy] of dir) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < m && ny >= 0 && ny < n && image[nx][ny] === orgColor) {
                    queue.push([nx, ny]);
                }

            }
        }
    }

    return image;
};