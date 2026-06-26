function numDecodings(s: string): number {
    const n = s.length;
    let prev2 = 1; //empty 
    let prev1 = s.charAt(0) === '0' ? 0 : 1;

    for (let i = 2; i <= n; i++) {
        let curr = 0;

        //1 digit
        if (s.charAt(i - 1) !== '0') {
            curr += prev1;
        }

        //2 digit
        if (
            s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '6')
        ) {
            curr += prev2;
        }

        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
};