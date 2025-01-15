function minimizeXor(num1: number, num2: number): number {
    const countSetBits = (num) => {
        return num.toString(2).split('1').length - 1;
    };

    const addSetBits = (num, bitsToAdd) => {
        let bitPos = 0;
        while (bitsToAdd > 0) {
            // Find the next unset bit
            while ((num >> bitPos) & 1) {
                bitPos++;
            }
            // Set the bit at bitPos
            num |= (1 << bitPos);
            bitsToAdd--;
        }
        return num;
    };

    const removeSetBits = (num, bitsToRemove) => {
        while (bitsToRemove > 0) {
            // Remove the least significant set bit
            num &= (num - 1);
            bitsToRemove--;
        }
        return num;
    };

    const setBitsNum1 = countSetBits(num1);
    const setBitsNum2 = countSetBits(num2);

    if (setBitsNum1 === setBitsNum2) {
        return num1;
    } else if (setBitsNum1 < setBitsNum2) {
        return addSetBits(num1, setBitsNum2 - setBitsNum1);
    } else {
        return removeSetBits(num1, setBitsNum1 - setBitsNum2);
    }
};