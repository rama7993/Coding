function numberOfBeams(bank: string[]): number {
    const counts: number[] = [];
    let beams = 0;

    for (const beam of bank) {
        const ones = beam.split('').reduce((acc, curr) => curr === '1' ? acc + 1 : acc, 0)
        if (ones > 0) counts.push(ones);
    }

    for (let i = 1; i < counts.length; i++) {
        beams += counts[i - 1] * counts[i];
    }

    return beams;
};