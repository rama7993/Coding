class Solution {
public:
    vector<int> arrayChange(vector<int>& nums, vector<vector<int>>& operations) {
        unordered_map<int,int>mp;
        int i=0;
        for(int &x:nums) mp[x]=i++;//store idx
        for(auto &x:operations){
            int old=x[0],val=x[1];
            int idx=mp[old];
            nums[idx]=val;//update idx to value in array;
            mp[val]=idx;//upadte new one 
            mp.erase(old);//delete old one
        }
        return nums;
    }
};