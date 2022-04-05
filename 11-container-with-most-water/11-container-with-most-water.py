class Solution:
    def maxArea(self, height: List[int]) -> int:
        l,n=0,len(height)
        r,val=n-1,(-sys.maxsize-1)#MIN
        while(l<r):
            if(height[l]<=height[r]):
                val=max(val,(r-l)*height[l])
                l+=1
            else:
                val=max(val,(r-l)*height[r])
                r-=1
        return val
            
            
        
        
       