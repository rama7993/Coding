class Solution {
    
    class comp implements Comparator<int[]>{
        @Override
        public int compare(int a[],int b[]){
            if(a[1]==b[1]) return a[0]-b[0];
            return a[1]-b[1];
        }
    }
    
    public int scheduleCourse(int[][] courses) {
        PriorityQueue<Integer> pq=new  PriorityQueue<>(Collections.reverseOrder());//PriorityQueue<>((a,b)->(b-a));
    //Arrays.sort(courses,(a,b)->(a[1]==b[1]) ? a[0]-b[0] : a[1]-b[1]);
    Arrays.sort(courses,new comp());//sort by endtime
    int time=0;
    for(int[] x:courses){
        int dur=x[0],last=x[1];
            if(dur+time<=last){
                pq.add(dur);
                time+=dur;
            }
            //swap with longest duration
            else if(!pq.isEmpty() && pq.peek()>dur){ //if highest is greater than current dur
                   time-=pq.poll();
                    pq.add(dur);
                    time+=dur;
                }
    }
        return pq.size();
    }
}