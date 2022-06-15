class Solution:
    def longestStrChain(self, words: List[str]) -> int:
        words.sort(key=len)
        mp={}
        res=0
        for word in words:
            mp[word]=1
            for i in range(len(word)):
                prev=word[:i]+word[i+1:]#deleting ith char
                if prev in mp:#if prev exists in map
                    mp[word]=max(mp[word],mp[prev]+1)
            res=max(res,mp.get(word))
        return res
            
                
            
        
        
        