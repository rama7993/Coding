from collections import Counter
from heapq import heappush,heappop
class Solution:
	def topK(self, nums, k):
	    mp=Counter(nums)
	    heap=[]
	    for key,val in mp.items():
	        heappush(heap,(-val,-key))
	    res=[]
	    while k>0:
	        a=-heappop(heap)[1]
	        res.append(a)
	        k-=1
	    return res
	       
	    
	    
		

#{ 
#  Driver Code Starts
		
if __name__ == '__main__':
    T=int(input())
    for i in range(T):
    	a = list(map(int, input().strip().split()))
    	n = a[0]
    	nums = a[1:]
    	k = int(input().strip())
    	obj = Solution()
    	ans = obj.topK(nums, k)
    	for i in ans:
    		print(i, end = " ")
    	print()
# } Driver Code Ends