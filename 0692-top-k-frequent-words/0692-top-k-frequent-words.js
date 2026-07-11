/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    const mp = new Map();

    for (const word of words) {
        mp.set(word, (mp.get(word) || 0) + 1);
    }

    const pq = new MinPriorityQueue({
        compare: (a, b) => a.freq === b.freq ? b.word.localeCompare(a.word) : a.freq - b.freq
    });

    for (const [word, freq] of mp) {
        pq.enqueue({ word, freq });

        console.log(pq.front());

        if (pq.size() > k) {
            pq.dequeue();
        }
    }

    const res = [];
    while (!pq.isEmpty()) {
        res.push(pq.dequeue().word);
    }

    return res.reverse();
};