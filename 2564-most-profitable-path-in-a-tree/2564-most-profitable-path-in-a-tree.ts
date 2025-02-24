function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
    const n = amount.length;
    const graph: number[][] = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    // Bob's path and time to reach each node
    const bobTime = new Map<number, number>();
    const parent = new Array(n).fill(-1);

    function dfsBob(node: number, par: number, time: number): boolean {
        if (node === 0) {
            bobTime.set(node, time);
            return true;
        }
        for (const neighbor of graph[node]) {
            if (neighbor !== par) {
                parent[neighbor] = node;
                if (dfsBob(neighbor, node, time + 1)) {
                    bobTime.set(node, time);
                    return true;
                }
            }
        }
        return false;
    }
    dfsBob(bob, -1, 0); // Start from Bob's position


    // Alice's DFS to maximize profit
    let maxProfit = -Infinity;

    function dfsAlice(node: number, par: number, time: number, income: number) {
        let currentAmount = amount[node];

        if (bobTime.has(node)) {
            const bobArrival = bobTime.get(node)!;
            if (time < bobArrival) {
                // Alice gets full amount
            } else if (time === bobArrival) {
                // They share the amount
                currentAmount /= 2;
            } else {
                // Bob already took it, Alice gets nothing
                currentAmount = 0;
            }
        }

        // Update Alice's income
        income += currentAmount;

        // If it's a leaf node, update max profit
        if (graph[node].length === 1 && node !== 0) {
            maxProfit = Math.max(maxProfit, income);
        }

        for (const neighbor of graph[node]) {
            if (neighbor !== par) {
                dfsAlice(neighbor, node, time + 1, income);
            }
        }
    }
    dfsAlice(0, -1, 0, 0); // Start Alice from node 0

    return maxProfit;
}
