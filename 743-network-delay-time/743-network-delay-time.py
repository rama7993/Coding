class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        
        dist=[sys.maxsize]*(n+1) #int_max and 0-indexed
        dist[k]=0 #src node
        for i in range(n+1):#bellman ford :relax V-1 times
            for u,v,w in times:
                if(dist[v]>dist[u]+w):
                    dist[v]=w+dist[u]
        ans=0
        for i in range(1,n+1):# 1-indexed
            ans=max(ans,dist[i]) #time to reach long dist
        return ans if ans!=sys.maxsize else -1
    
        
        
            
        
        