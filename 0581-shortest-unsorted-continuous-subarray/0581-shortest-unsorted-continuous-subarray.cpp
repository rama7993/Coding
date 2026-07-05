class Solution {
public:
    int findUnsortedSubarray(vector<int>& nums) {
        int Min=INT_MAX;//decreasing val from start
        int Max=INT_MIN;//increasing val from end
        int i,j,n=nums.size();
        
        for(i=0;i<n-1;i++){
            if(nums[i+1]<nums[i])//decreasing
                Min=min(Min,nums[i+1]);
        }
        for(j=n-1;j>0;j--){
              if(nums[j]<nums[j-1])//increasing
                Max=max(Max,nums[j-1]);
        }
        if(Min==INT_MAX and  Max==INT_MIN)//sorted already
            return 0;
        
        for(i=0;i<n;i++){
            if(nums[i]>Min) break; //start point
        }
        for(j=n-1;j>=0;j--){
             if(nums[j]<Max) break; //end point
        }
        return j-i+1;
    }
};