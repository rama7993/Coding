function lemonadeChange(bills: number[]): boolean {
    let wallet = [0, 0];
    for (const bill of bills) {
        if (bill === 5) {
            wallet[0]++;
        } else if (bill === 10) {
            wallet[1]++;
            wallet[0]--;
        } else if (bill === 20) {
            if (wallet[1] > 0) {
                wallet[1]--;
                wallet[0]--;
            } else {
                wallet[0] -= 3;
            }
        }
        if (wallet[0] < 0) {
            return false;
        }
    }
    return true;
};