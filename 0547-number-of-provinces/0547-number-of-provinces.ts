function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let cnt = 0;

    const dfs = (node) => {
        visited[node] = true;
        for (let nbr = 0; nbr < n; nbr++) {
            if (isConnected[node][nbr] == 1 && !visited[nbr]) {
                dfs(nbr);
            }
        }
    }

    for (let city = 0; city < n; city++) {
        if (!visited[city]) {
            dfs(city);
            cnt++;
        }
    }
    return cnt;
};