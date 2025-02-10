function clearDigits(s: string): string {
    const stack: string[] = [];

    for (let char of s) {
        if (isNumber(char)) {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}

function isNumber(s: string): boolean {
    return /^[0-9]$/.test(s);
}
