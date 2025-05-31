function snakesAndLadders(board: number[][]): number {
    const n = board.length;

    function getCoordinates(num: number): [number, number] {
        const row = n - 1 - Math.floor((num - 1) / n);
        let col = (num - 1) % n;
        if ((n - row) % 2 === 0) {
            col = n - 1 - col;
        }
        return [row, col];
    }

    const visited = new Set<number>();
    const queue: [number, number][] = [[1, 0]]; // [cell number, move count]

    while (queue.length > 0) {
        const [cell, moves] = queue.shift()!;
        for (let i = 1; i <= 6; i++) {
            let next = cell + i;
            if (next > n * n) continue;

            const [row, col] = getCoordinates(next);
            if (board[row][col] !== -1) {
                next = board[row][col];
            }

            if (next === n * n) return moves + 1;

            if (!visited.has(next)) {
                visited.add(next);
                queue.push([next, moves + 1]);
            }
        }
    }

    return -1; // unreachable
}
