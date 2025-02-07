function isPalindrome(s: string): boolean {
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (!isAlnum(s[i])) i++;
        else if (!isAlnum(s[j])) j--;
        else if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        else {
            i++; j--;
        }

    }
    return true;
};

function isAlnum(str: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(str);
}