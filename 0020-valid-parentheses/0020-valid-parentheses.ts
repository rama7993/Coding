function isValid(s: string): boolean {
    const stack: string[] = [];

    const openingTags: string[] = ['(', '{', '['];
    const pairs: Record<string, string> = {
        '}': '{',
        ')': '(',
        ']': '['
    }


    for (const char of s) {
        if (openingTags.includes(char)) stack.push(char);
        else {
            if (stack.length == 0 || stack.pop() !== pairs[char]) return false;
        }
    }

    return stack.length === 0;
};