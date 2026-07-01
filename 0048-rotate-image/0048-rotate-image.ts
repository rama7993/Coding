/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;
    let left = 0, right = n - 1;

    while (left < right) { //rotate layers 
        const top = left, bottom = right;

        for (let i = 0; i < right - left; i++) {// for each layer
            const topLeft = matrix[top][left + i];
            // top-left by bottom-left
            matrix[top][left + i] = matrix[bottom - i][left]
            // bottom-left by bottom-right
            matrix[bottom - i][left] = matrix[bottom][right - i];
            // bottom-right by top-right
            matrix[bottom][right - i] = matrix[top + i][right];
            // top-right by top-left
            matrix[top + i][right] = topLeft;
        }
        left++; right--;
    }


};