class Solution {
private:
    long long possible(vector<int>& nums, long long val){
        long long cnt=0;
        for(int &x:nums)
            cnt+=(x/val);
        return cnt;
    }
public:
    int maximumCandies(vector<int>& candies, long long k) {
        int ans=0;
        int  l=1,r=*max_element(candies.begin(),candies.end());
        while(l<=r){
            int mid=l+(r-l)/2;
            if(possible(candies,mid)>=k){
                ans=mid;
                l=mid+1;
            }
            else{
                r=mid-1;
            }
        }
        return ans;
    } 
};