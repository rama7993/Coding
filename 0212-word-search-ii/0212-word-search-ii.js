var Trie = function () {
    this.children = {};
    this.word = null;
}

Trie.prototype.addWord = function (word) {
    let curr = this;

    for (let ch of word) {
        if (!Object.hasOwn(curr.children, ch)) {
            curr.children[ch] = new Trie();
        }
        curr = curr.children[ch];
    }
    curr.word = word;
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const root = new Trie();
    const m = board.length, n = board[0].length;
    for (const word of words) {
        root.addWord(word);
    }

    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const res = [];
    const dfs = (i, j, curr) => {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] === '#') return;

        const ch = board[i][j];
        if (!curr.children[ch]) return;

        curr = curr.children[ch];
        if (curr.word) {
            res.push(curr.word);
            curr.word = null;
        }

        board[i][j] = '#';
        for (const [dx, dy] of dir) {
            dfs(i + dx, j + dy, curr)
        }
        board[i][j] = ch;
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, root);
        }
    }

    return res;
};


