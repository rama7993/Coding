/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length, n = board[0].length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    const dfs = (i, j, idx) => {
        if (i >= m || i < 0 || j >= n || j < 0 || visited[i][j] || board[i][j] !== word[idx]) return false;

        if (idx === word.length - 1) return true;

        visited[i][j] = true;
        let found = false;
        for (const [dx, dy] of dirs) {
            found = found || dfs(i + dx, j + dy, idx + 1);
        }

        visited[i][j] = false;
        return found;

    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};