function minDominoRotations(tops: number[], bottoms: number[]): number {
    const n = tops.length;

    const check = (val: number, arr1: number[], arr2: number[]): number => {
        let cnt = 0;
        for (let i = 0; i < n; i++) {
            if (arr1[i] === val) continue;
            else if (arr2[i] === val) cnt++;
            else return -1;
        }
        return cnt;
    };

    const rotations = [
        check(tops[0], tops, bottoms),
        check(tops[0], bottoms, tops),
        check(bottoms[0], tops, bottoms),
        check(bottoms[0], bottoms, tops)
    ];

    const validRotations = rotations.filter(r => r !== -1);
    return validRotations.length ? Math.min(...validRotations) : -1;
}
