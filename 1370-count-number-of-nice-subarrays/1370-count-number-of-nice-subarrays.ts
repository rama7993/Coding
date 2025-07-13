function numberOfSubarrays(nums: number[], k: number): number {
    const atMost = (kOdds) => {
        const n = nums.length;
        let left = 0, cnt = 0, odds = 0;
        for (let right = 0; right < n; right++) {
            if (nums[right] % 2 === 1) cnt++;
            while (cnt > kOdds) {
                if (nums[left] % 2 === 1) cnt--;
                left++;
            }
            odds += right - left + 1;
        }
        return odds;
    }

    return atMost(k) - atMost(k - 1);
};