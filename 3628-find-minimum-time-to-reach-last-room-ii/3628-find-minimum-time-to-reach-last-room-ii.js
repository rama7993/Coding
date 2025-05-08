/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function (moveTime) {
    const rows = moveTime.length;
    const cols = moveTime[0].length;

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const queue = new MinPriorityQueue(item => item.time);

    // Each item in the queue: { row, col, time, step }
    queue.enqueue({ row: 0, col: 0, time: 0, step: 1 });
    visited[0][0] = true;

    const directions = [
        [1, 0],  // down
        [0, 1],  // right
        [-1, 0], // up
        [0, -1]  // left
    ];

    while (queue.size()) {
        const { row, col, time, step } = queue.dequeue();

        if (row === rows - 1 && col === cols - 1) {
            return time;
        }

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                !visited[newRow][newCol]
            ) {
                const nextStep = step === 1 ? 2 : 1;
                const newTime = Math.max(moveTime[newRow][newCol] + step, time + step);

                queue.enqueue({
                    row: newRow,
                    col: newCol,
                    time: newTime,
                    step: nextStep
                });

                visited[newRow][newCol] = true;
            }
        }
    }
    return -1;
};
