/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    const n = heights.length;
    const leftSmall = getLeftArray(heights);
    const rightSmall = getRightArray(heights);

    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        const width = rightSmall[i] - leftSmall[i] - 1;
        const area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};

var getLeftArray = function (heights) {
    const n = heights.length;
    const left = new Array(n);
    const stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
    }
    return left;
}


var getRightArray = function (heights) {
    const n = heights.length;
    const right = new Array(n);
    const stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        right[i] = stack.length === 0 ? n : stack[stack.length - 1];
        stack.push(i);
    }
    return right;
}