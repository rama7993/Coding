function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const m = image.length, n = image[0].length;
    const orgColor = image[sr][sc];

    const dfs = (i, j) => {
        if (i >= m || i < 0 || j < 0 || j >= n || image[i][j] !== orgColor) return;
        image[i][j] = color;
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    if (orgColor !== color) {
        dfs(sr, sc);
    }
    return image;
};