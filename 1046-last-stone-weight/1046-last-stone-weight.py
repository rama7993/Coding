class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        heap=[]
        for x in stones:
            heapq.heappush(heap,-x)#max_heap(-val)
            
        while len(heap)>1:
            a=-heapq.heappop(heap)
            b=-heapq.heappop(heap)
            if a!=b: #avoid repeats and zeroes
                heapq.heappush(heap,-(a-b))
        return 0 if not heap else -heap[0]
          
            
            
        
        
        