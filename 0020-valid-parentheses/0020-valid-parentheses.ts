function isValid(s: string): boolean {
    const st = [];
    for (let char of s) {
        if (char === '(') {
            st.push(')')
        } else if (char === '{') {
            st.push('}')
        } else if (char === '[') {
            st.push(']')
        } else {
            if (st.length === 0 || st[st.length - 1] !== char) {
                return false;
            }
            st.pop();
        }
    }

    return st.length === 0;
};