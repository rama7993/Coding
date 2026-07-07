function findWords(words: string[]): string[] {
    const mp = new Map();

    let row1 = new Set("qwertyuiop"), row2 = new Set("asdfghjkl"), row3 = new Set("zxcvbnm");

    let res = [];

    for (const word of words) {
        const lower = word.toLowerCase();

        let row;
        if (row1.has(lower[0])) row = row1;
        else if (row2.has(lower[0])) row = row2;
        else row = row3;

        let valid = true;
        for (let ch of lower) {
            if (!row.has(ch)) {
                valid = false; break;
            }
        }
        valid && res.push(word);
    }

    return res;
};