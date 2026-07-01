/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const m = matrix.length, n = matrix[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    const dfs = (r: number, c: number, dr: number, dc: number) => {
        if (r < 0 || r >= m || c < 0 || c >= n) return;
        if (visited[r][c] && matrix[r][c] !== 0) return;

        if (matrix[r][c] !== 0) {
            visited[r][c] = true;
        }

        matrix[r][c] = 0;

        // Keep moving in the SAME direction
        dfs(r + dr, c + dc, dr, dc);
    };



    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (matrix[i][j] === 0 && !visited[i][j]) {

                visited[i][j] = true;

                for (const [dr, dc] of dir) {
                    dfs(i + dr, j + dc, dr, dc);
                }
            }
        }
    }
};