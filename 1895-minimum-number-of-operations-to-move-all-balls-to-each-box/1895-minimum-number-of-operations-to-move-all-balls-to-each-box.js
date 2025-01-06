/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    const n = boxes.length;
    let arr = Array(n).fill(0);

    // Left to right pass
    let count = 0;
    let operations = 0;
    for (let i = 0; i < n; i++) {
        arr[i] += operations;
        count += +boxes[i];
        operations += count;
    }

    // Right to left pass
    count = 0;
    operations = 0;
    for (let i = n - 1; i >= 0; i--) {
        arr[i] += operations;
        count += +boxes[i];
        operations += count;
    }
    return arr;
};