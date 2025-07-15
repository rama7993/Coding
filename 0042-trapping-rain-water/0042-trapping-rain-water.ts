function trap(height: number[]): number {
    const n = height.length;
    let leftMax = 0, rightMax = 0;
    let i = 0, j = n - 1;
    let res = 0;

    while (i < j) {
        if (height[i] < height[j]) { // process left side
            if (height[i] > leftMax) {
                leftMax = height[i]; //can't trap water here
            } else {
                res += leftMax - height[i];
            }

            i++;
        } else { // process right side
            if (height[j] > rightMax) {
                rightMax = height[j]; //can't trap water here
            } else {
                res += rightMax - height[j];
            }
            j--;
        }
    }

    return res;
};