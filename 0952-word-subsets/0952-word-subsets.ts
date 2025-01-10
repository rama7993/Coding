function wordSubsets(words1: string[], words2: string[]): string[] {
    const maxFreq = {}; // store max freq of each char of all words in word2;
    const res = [];
    for (let word of words2) {
        const currFreq = charFreq(word);
        for (const char in currFreq) {
            maxFreq[char] = Math.max(maxFreq[char] || 0, currFreq[char]);
        }
    }


    for (const word of words1) {
        const wordFreq = charFreq(word);
        let isSubset: boolean = true;
        for (const char in maxFreq) {//check for Each word if maxFreq is present
            if (maxFreq[char] > (wordFreq[char] || 0)) {
                isSubset = false;
                break;
            }
        }
        if (isSubset) res.push(word);
    }

    return res;
};


function charFreq(word: string) {
    const mp = {};
    for (let char of word) {
        mp[char] = (mp[char] || 0) + 1;
    }
    return mp;
}