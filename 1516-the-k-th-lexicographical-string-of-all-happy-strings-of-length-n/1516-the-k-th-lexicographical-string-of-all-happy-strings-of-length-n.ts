function getHappyString(n: number, k: number): string {
    const chars = ['a', 'b', 'c'];
    let count = 0;
    let result = '';

    function backtrack(curr: string) {
        if (curr.length === n) {
            count++;
            if (count === k) {
                result = curr;
            }
            return;
        }

        for (let ch of chars) {
            if (curr.length === 0 || curr[curr.length - 1] !== ch) {
                backtrack(curr + ch);
                if (result) return; // Stop early when we reach kth string
            }
        }
    }

    backtrack('');
    return result;
}
