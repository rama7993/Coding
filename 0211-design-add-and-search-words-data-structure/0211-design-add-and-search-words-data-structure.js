
var WordDictionary = function () {
    this.children = {};
    this.isEnd = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let curr = this; // trie
    for (let ch of word) {
        if (!curr.children[ch]) {
            curr.children[ch] = new WordDictionary();
        }
        curr = curr.children[ch];
    }

    curr.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    const dfs = (curr, idx) => {
        if (idx === word.length) return curr.isEnd;
        const ch = word[idx];
        if (ch === '.') {
            for (const child of Object.values(curr.children)) {
                if (dfs(child, idx + 1)) return true;
            }
            return false;
        } else {
            if (!curr.children[ch]) return false;
            curr = curr.children[ch];
            return dfs(curr, idx + 1);
        }
    }

    return dfs(this, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */