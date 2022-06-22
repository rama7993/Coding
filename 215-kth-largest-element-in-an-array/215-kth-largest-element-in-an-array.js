/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap= new MinPriorityQueue({priority :x => x});
    for(let val of nums){
        heap.enqueue(val);
        if(heap.size()>k) heap.dequeue();
    }
    return heap.front().element;
};