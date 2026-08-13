/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
    const mp = new Map(); // table -> Map<food, cnt>;
    const foods = new Set();

    for (let order of orders) {
        const [name, table, item] = order;
        if (!mp.has(table)) {
            mp.set(table, new Map());
        }

        foods.add(item);
        const tableMap = mp.get(table);
        tableMap.set(item, (tableMap.get(item) || 0) + 1);
    }

    const sortedFoods = Array.from(foods).sort();
    const sortedTables = [...mp.entries()].sort(([table1], [table2]) => Number(table1) - Number(table2));
    const res = [["Table", ...sortedFoods]];

    for (const [table, tableMap] of sortedTables) {
        const row = [table];
        for (const food of sortedFoods) {
            row.push(String(tableMap.get(food) || "0"));
        }
        res.push(row);
    }

    return res;
};