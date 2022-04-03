class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        n=len(nums)
        if(n==1):
            return 
        idx=0
        for i in range(n-1,-1,-1):
            if(nums[i-1]<nums[i]):# break at last non increasing idx
                idx=i-1 
                break 
                     
        if(idx<0):#last permutation 
            nums.reverse() #nums[::-1]
        else:
            for j in range(n-1,idx,-1):
                if(nums[j]>nums[idx]):
                    break
            nums[j],nums[idx]=nums[idx],nums[j]#swap
            nums[idx+1:]=nums[:idx:-1]#reverse idx+1 to end
                
                
                
            
        
        
        