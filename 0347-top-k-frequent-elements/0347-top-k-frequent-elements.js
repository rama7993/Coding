/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const mp = new Map();
    const pq = new MinPriorityQueue(item => item.freq);

    for (const num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1)
    }

    for (const [key, val] of mp) {
        pq.enqueue({ key, freq: val });
        if (pq.size() > k) {
            pq.dequeue();
        }
    }

    return pq.toArray().map(item => item.key);
};