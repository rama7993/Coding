/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const m = board.length, n = board[0].length;
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const isBorder = (i, j) => {
        return (i === 0 || i === m - 1 || j == 0 || j == n - 1);

    }

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') return;
        board[i][j] = 'S'; //safe

        for (const [dx, dy] of dir) {
            dfs(i + dx, j + dy);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isBorder(i, j) && board[i][j] === 'O') {
                dfs(i, j);
            }
        }
    }

    //Flip all 'O' to 'X' and 'S' back to 'O'
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 'S') board[i][j] = 'O';
            else if (board[i][j] == 'O') board[i][j] = 'X';
        }
    }
};