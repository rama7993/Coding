function minOperations(boxes: string): number[] {
    const n = boxes.length;
    let arr = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            boxes[j] === '1' ? sum += Math.abs(j - i) : null;
        }
        arr[i] = sum;
    }
    return arr;
};