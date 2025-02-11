function removeOccurrences(s: string, part: string): string {
    const st = [];//stack
    const len = part.length, n = s.length;
    for (let i = 0; i < n; i++) {
        st.push(s[i]);
        if (st.length >= len) {
            const req = st.slice(-len).join('');
            if (req === part) {
                st.splice(-len, len);
            }

        }
    }

    return st.join('');
};