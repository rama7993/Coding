class Trie {
    children = new Map<string, Trie>();
    isEnd = false;

    insert(word: string) {
        let node: Trie = this;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new Trie());
            }
            node = node.children.get(char)!;
        }
        node.isEnd = true;
    }

    hasWord(word: string): boolean {
        let node: Trie = this;
        for (const char of word) {
            if (!node.children.has(char)) return false;
            node = node.children.get(char)!;
        }
        return node.isEnd;
    }
}


function findWords(board: string[][], words: string[]): string[] {
    const root = new Trie();
    for (const word of words) {
        root.insert(word);
    }

    const result = [];
    const m = board.length;
    const n = board[0].length;

    const dfs = (i: number, j: number, node: Trie, path: string) => {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] === '#') return;

        const char = board[i][j];
        const nextNode = node.children.get(char);
        if (!nextNode) return;

        const newPath = path + char;
        if (nextNode.isEnd) {
            result.push(newPath);
            nextNode.isEnd = false;
        }

        board[i][j] = '#'; // mark visited

        dfs(i + 1, j, nextNode, newPath);
        dfs(i - 1, j, nextNode, newPath);
        dfs(i, j + 1, nextNode, newPath);
        dfs(i, j - 1, nextNode, newPath);

        board[i][j] = char; // backtrack
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, root, '');
        }
    }

    return result;
}
