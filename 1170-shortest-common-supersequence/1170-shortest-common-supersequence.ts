function shortestCommonSupersequence(str1: string, str2: string): string {
    const m = str1.length, n = str2.length;
    // const memo = Array(m + 1).fill(null).map(() => Array(n + 1).fill(null));
    const memo = Array.from({ length: m + 1 }, () => Array(n + 1).fill(null));

    function helper(i: number, j: number): string {
        if (i === m) return str2.slice(j);
        if (j === n) return str1.slice(i);

        if (memo[i][j] !== null) return memo[i][j];

        if (str1[i] === str2[j]) {
            return memo[i][j] = str1[i] + helper(i + 1, j + 1);
        } else {
            let option1 = str1[i] + helper(i + 1, j);
            let option2 = str2[j] + helper(i, j + 1);

            return memo[i][j] = (option1.length < option2.length ? option1 : option2);
        }

    }

    return helper(0, 0);
};