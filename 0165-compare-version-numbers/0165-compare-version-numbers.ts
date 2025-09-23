function compareVersion(version1: string, version2: string): number {
    const arr1 = version1.split('.');
    const arr2 = version2.split('.');

    const m = arr1.length;
    const n = arr2.length;
    const len = Math.min(m, n);

    for (let i = 0; i < len; i++) {
        const v1 = +arr1[i];
        const v2 = +arr2[i];
        if (v1 === v2) continue;
        else if (v1 > v2) return 1;
        else if (v1 < v2) return -1;
    }

    // remaining parts of version1
    for (let i = len; i < m; i++) {
        if (+arr1[i] !== 0) return 1;
    }

    //  remaining parts of version2
    for (let i = len; i < n; i++) {
        if (+arr2[i] !== 0) return -1;
    }

    return 0;
};