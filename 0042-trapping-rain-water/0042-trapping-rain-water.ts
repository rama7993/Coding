function trap(height: number[]): number {
    const n = height.length;
    let leftMax = 0, rightMax = 0;
    let i = 0, j = n - 1;
    let trapped = 0;

    while (i < j) {
        if (height[i] < height[j]) {
            leftMax = Math.max(leftMax, height[i]);
            trapped += leftMax - height[i];
            i++;
        } else {
            rightMax = Math.max(rightMax, height[j]);
            trapped += rightMax - height[j];
            j--;
        }
    }

    return trapped;
};