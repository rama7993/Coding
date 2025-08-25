function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length, n = matrix[0].length;
    let low = 0, high = m * n - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const i = Math.floor(mid / n);
        const j = mid % n;

        if (matrix[i][j] === target) return true;

        else if (matrix[i][j] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
};