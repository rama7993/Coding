/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length, n = board[0].length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const dfs = (i, j, idx) => {
        if (i >= m || i < 0 || j >= n || j < 0 || board[i][j] === '#' || board[i][j] !== word[idx]) return false;

        if (idx === word.length - 1) return true;

        const temp = board[i][j];
        board[i][j] = '#'; // visited
        for (const [dx, dy] of dirs) {
            if (dfs(i + dx, j + dy, idx + 1)) return true;
        }
        board[i][j] = temp;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};