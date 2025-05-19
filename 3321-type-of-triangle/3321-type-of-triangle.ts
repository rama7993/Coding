function triangleType(nums: number[]): string {
    const [a, b, c] = nums;

    if (a + b <= c || a + c <= b || b + c <= a) return "none";
    else if (a === b && b === c) return "equilateral";
    else if (a === b || b === c || a === c) return "isosceles";
    else return "scalene";
};