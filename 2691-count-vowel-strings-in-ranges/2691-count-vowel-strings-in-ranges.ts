function vowelStrings(words: string[], queries: number[][]): number[] {
    const mp = {}, arr = [];
    mp[0] = vowelCheck(words[0]) ? 1 : 0
    for (let i = 1; i < words.length; i++) {
        mp[i] = (mp[i - 1] || 0) + (vowelCheck(words[i]) ? 1 : 0);
    }
    console.log(mp)
    for (const [x, y] of queries) {
        const sum = mp[y] - (mp[x - 1] || 0);
        arr.push(sum);
    }
    return arr;
};


function vowelCheck(word: string): boolean {
    let n = word.length;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(word[0]) && vowels.includes(word[n - 1]);
}
