function letterCombinations(digits: string): string[] {
    const keypad = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let res = [];
    const n = digits.length;

    const dfs = (idx, path) => {
        if (idx === n) {
            res.push(path.join(''));
            return;
        }


        const curr = digits[idx];
        const pad = keypad[Number(curr)];
        for (let i = 0; i < pad.length; i++) {
            path.push(pad[i]);
            dfs(idx + 1, path);
            path.pop();
        }
    }

    dfs(0, []);
    return res;
};