function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
    const knows = new Map<number, Set<number>>();
    const m = languages.length;

    for (let i = 0; i < m; i++) {
        knows.set(i + 1, new Set(languages[i]));
    }

    const toTeach = new Set<number>();
    for (const [x, y] of friendships) {
        const setX = knows.get(x);
        const setY = knows.get(y);

        let canCommunicate = false;
        for (let lang of setX) {
            if (setY.has(lang)) {
                canCommunicate = true;
                break;
            }
        }

        if (!canCommunicate) {
            toTeach.add(x);
            toTeach.add(y);
        }
    }

    if (toTeach.size === 0) return 0;

    let minTeach = Infinity;
    for (let lang = 1; lang <= n; lang++) {
        let cnt = 0;
        for (const person of toTeach) {
            if (knows.get(person).has(lang)) continue;
            else cnt++;
        }
        minTeach = Math.min(minTeach, cnt);
    }

    return minTeach;
};