class TimeLimitedCache {
    private cache = new Map<number, { value: number, timer: NodeJS.Timeout }>();
    constructor() {

    }

    set(key: number, value: number, duration: number): boolean {
        const hasKey = this.cache.has(key);
        if (hasKey) {
            clearTimeout(this.cache.get(key).timer);
        }
        const timer = setTimeout(() => this.cache.delete(key), duration);
        this.cache.set(key, { value: value, timer: timer });
        return hasKey;
    }

    get(key: number): number {
        return this.cache.get(key)?.value ?? -1;
    }

    count(): number {
        return this.cache.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */