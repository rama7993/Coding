
var MedianFinder = function () {
    this.small = new MaxPriorityQueue(); // left of median
    this.large = new MinPriorityQueue();// right of median
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    this.small.enqueue(num);
    this.large.enqueue(this.small.dequeue());
    //Balance 
    if (this.large.size() > this.small.size()) {
        this.small.enqueue(this.large.dequeue());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.small.size() > this.large.size()) return this.small.front();

    return (this.small.front() + this.large.front()) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */