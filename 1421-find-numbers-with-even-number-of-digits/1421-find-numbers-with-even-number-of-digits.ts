function findNumbers(nums: number[]): number {
    let cnt = 0;

    const digits = (num) => {
        let cnt = 0;
        while (num) {
            cnt++;
            num = Math.floor(num / 10);
        }
        return cnt & 1 ? 0 : 1;
    }

    for (let num of nums) {
        cnt += digits(num);
    }

    return cnt;
};