class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int bgn=0,n=nums.size();
        for(int i=0;i<n;i++){
            if(nums[i]!=val){
                nums[bgn]=nums[i];
                bgn++;
            }
        }
        return bgn;
    }
};