/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(h, bricks, ladders) {
    let i=0;
    const heap=new MaxPriorityQueue({priority: x => x});//store ladders no. of max_size in heap
    for(i=0;i<h.length-1;i++){
        if(h[i]>=h[i+1]) continue;
        const diff=h[i+1]-h[i];
        if(diff>bricks){//if no bricks, use ladders
            if(ladders==0) break;
            if(!heap.isEmpty() && heap.front().element>diff){//exchange ladder with bricks;
                ladders-=1;
                bricks+=heap.dequeue().element-diff;
                heap.enqueue(diff);
               }
            else{
                ladders-=1;//use ladder
            }
        }
        else{
            bricks-=diff;
            heap.enqueue(diff);
        }
       
     }
    return i;
};