/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    const arr = this;
    this.grid = Array.from({ length: rowsCount }, () => Array(colsCount));
    let idx = 0, dir = 1;

    if (rowsCount * colsCount != arr.length) return [];

    for (let j = 0; j < colsCount; j++) {
        if (dir === 1) {
            for (let i = 0; i < rowsCount; i++) {
                this.grid[i][j] = arr[idx++];
            }
        } else {
            for (let i = rowsCount - 1; i >= 0; i--) {
                this.grid[i][j] = arr[idx++];
            }
        }

        dir *= -1;
    }

    return this.grid;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */