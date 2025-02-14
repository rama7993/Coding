function isPalindrome(x: number): boolean {
    let sum = 0, num = x;
    while (x > 0) {
        sum = sum * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return sum === num;
};