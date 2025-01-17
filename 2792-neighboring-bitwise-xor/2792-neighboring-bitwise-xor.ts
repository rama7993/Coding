function doesValidArrayExist(derived: number[]): boolean {
    return derived.reduce((acc, curr) => acc ^ curr, 0) === 0;
};