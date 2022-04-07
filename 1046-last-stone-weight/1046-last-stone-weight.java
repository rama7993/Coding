class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer>pq=new PriorityQueue<>((a,b)->b-a);//max_heap;
        for(int x:stones)
            pq.add(x);
        while(pq.size()>1){
            int a=pq.poll(),b=pq.poll();
            pq.add(a-b);
        }
        return pq.peek();
    }
}