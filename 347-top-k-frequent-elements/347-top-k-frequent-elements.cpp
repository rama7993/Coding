class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int,int>mp;
        for(int &x:nums)
            mp[x]++;
        priority_queue<pair<int,int>>pq;//max_heap;
        for(auto &it:mp)
            pq.push({it.second,it.first});
        vector<int>vect;
        while(k-->0){
            vect.push_back(pq.top().second);
            pq.pop();
        }
        return vect;
    }
};