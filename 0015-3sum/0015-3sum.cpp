class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        vector<vector<int>>v;
        int i,lo,hi,n=nums.size();
        for(i=0;i<n;i++){
            lo=i+1;hi=n-1;
            while(lo<hi){
                int sum=nums[i]+nums[lo]+nums[hi];
                if(sum==0){
                    v.push_back({nums[i],nums[lo],nums[hi]});
                    while(lo<hi and nums[lo]==nums[lo+1])lo++;
                    while(lo<hi and nums[hi]==nums[hi-1])hi--;
        
                    lo++;hi--;}
                else if(sum>0){
                    hi--;
                }
                else lo++;
            }
            while(i+1<n and nums[i+1]==nums[i]) i++;
        }
        return v;
    }
};