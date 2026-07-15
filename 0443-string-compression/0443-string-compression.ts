function compress(chars: string[]): number {
    const res: string[] = [];
    let count = 1;

    for (let i = 1; i <= chars.length; i++) {
        if (chars.at(i - 1) === chars.at(i)!) {
            count++;
        } else {
            res.push(chars.at(i - 1));

            if (count > 1) {
                for (const digit of count.toString()) {
                    res.push(digit);
                }
            }

            count = 1;
        }
    }



    for (let i = 0; i < res.length; i++) {
        chars[i] = res[i];
    }

    return res.length;
};