function check(nums: number[]): boolean {
    const n = nums.length;
    const sorted = [...nums].sort((a, b) => a - b);

    for (let i = 0; i < n; i++) { // rotation index
        let matched: boolean = true;
        for (let j = 0; j < n; j++) {
            if (nums[(i + j) % n] !== sorted[j]) { //  if rotated version matches sorted array
                matched = false;
                break;
            }
        }
        if (matched) return true;
    }
    return false;
}
