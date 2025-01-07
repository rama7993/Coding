type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    const n = functions.length;
    return new Promise((resolve, reject) => {
        const results = new Array<T>(n);
        let count = 0;
        functions.forEach((fn, idx) => {
            fn()
                .then((val) => {
                    results[idx] = val;
                    count++;
                    if (count === n) {
                        resolve(results);
                    }
                })
                .catch(err => reject(err));
        });
    });
}
