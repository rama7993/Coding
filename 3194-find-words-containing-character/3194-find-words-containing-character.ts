function findWordsContaining(words: string[], x: string): number[] {
    const ans = [];
    words.forEach((item, idx) => {
        if (item.includes(x)) ans.push(idx);
    })
    return ans;
};