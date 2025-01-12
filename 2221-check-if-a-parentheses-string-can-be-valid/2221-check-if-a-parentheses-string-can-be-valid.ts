function canBeValid(s: string, locked: string): boolean {
    const n = locked.length;
    if (n % 2 === 1) return false;

    const stack: number[] = []; // open brackets positions
    const unlocked: number[] = []; // zero positions

    for (let i = 0; i < n; i++) {
        if (locked[i] === '0') {
            unlocked.push(i);
        } else if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length > 0) {
                stack.pop()
            } else if (unlocked.length > 0) {
                unlocked.pop();
            } else {
                return false;
            }
        }
    }

    // Match remaining open brackets with unlocked characters
    while (stack.length > 0 && unlocked.length > 0 &&
        stack.at(-1) < unlocked.at(-1)) {
        stack.pop();
        unlocked.pop();
    }

    if (stack.length > 0) {
        return false;
    }

    return true;

}
