class Solution:
    def validPalindrome(self, s: str) -> bool:
        def pal(s):
            return s==s[::-1]
        if pal(s):
            return True
        l,r=0,len(s)-1
        while l<r:
            if s[l]!=s[r]:
                sub1=s[l+1:r+1]#left+1
                sub2=s[l:r]#right-1
                return pal(sub1) or pal(sub2)
            l+=1
            r-=1  
        return False
            
            
            
        
        