#User function Template for python3

class Solution:
	def add(self, s1, s2):
	     a=int(s1)
	     b=int(s2)
	     return str(a+b)
		# Code here
#{ 
#  Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		s1 = input()
		s2 = input()
		ob = Solution()
		ans = ob.add(s1, s2)
		print(ans)
# } Driver Code Ends