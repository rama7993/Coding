function partition(s: string): string[][] {
    const n = s.length;
    const res = [];

    const isPalindrome = (i, j) => {
        while (i < j) {
            if (s[i] !== s[j]) return false;
            else {
                i++; j--;
            }
        }
        return true;
    }

    const backtrack = (start, path) => {
        if (start === n) {
            res.push([...path]);
            return;
        }
        for (let end = start; end < n; end++) {
            if (isPalindrome(start, end)) {
                path.push(s.substring(start, end + 1));
                backtrack(end + 1, path);
                path.pop();
            }
        }
    }

    backtrack(0, []);
    return res;
};