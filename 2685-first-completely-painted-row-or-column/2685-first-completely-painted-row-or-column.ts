function firstCompleteIndex(arr: number[], mat: number[][]): number {
    const rows: number = mat.length;
    const cols: number = mat[0].length;
    const rowCount: number[] = Array(rows).fill(0);
    const colCount: number[] = Array(cols).fill(0);
    const positionMap: Map<number, number[]> = new Map();

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            positionMap.set(mat[r][c], [r, c]);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const [row, col] = positionMap.get(arr[i])!;
        rowCount[row]++;
        colCount[col]++;
        if (rowCount[row] === cols || colCount[col] === rows) {
            return i;
        }
    }

    return -1;
}
