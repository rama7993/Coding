function maxArea(height: number[]): number {
    const n = height.length;
    let left = 0, right = n - 1;
    let res = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            res = Math.max(res, height[left] * (right - left));
            left++
        } else {
            res = Math.max(res, height[right] * (right - left));
            right--;
        }
    }

    return res;
};