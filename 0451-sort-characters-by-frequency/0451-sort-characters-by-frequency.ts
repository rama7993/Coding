function frequencySort(s: string): string {
    const mp = new Map<string, number>();

    for (let char of s) {
        mp.set(char, (mp.get(char) || 0) + 1);
    }


    return s.split('').sort((a, b) => {
        const freqA = mp.get(a) || 0;
        const freqB = mp.get(b) || 0;

        if (freqA !== freqB) return freqB - freqA; // Descending by frequency
        return a.localeCompare(b);                 // Ascending alphabetical order
    }).join('');

};