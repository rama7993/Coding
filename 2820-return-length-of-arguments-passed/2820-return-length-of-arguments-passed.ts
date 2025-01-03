type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    let count = 0;
    while (args[count] !== undefined) {
        count++;
    }
    return count;
}

/**
 * argumentsLength(1, 2, 3); // 3
 */