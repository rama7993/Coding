class Solution {
public:
    int numMatchingSubseq(string s, vector<string>& words) {
         map<char,vector<int>>mp;
         int n=s.length();
         for(int i=0;i<n;i++){
             mp[s[i]].push_back(i);
         }
        int cnt=0;
         for(auto &x:words){
             int val=-1;
             for(int j=0;j<x.length();j++){
                 auto it=upper_bound(mp[x[j]].begin(),mp[x[j]].end(),val);
                 if(it==mp[x[j]].end())//if not found
                     break;
                 val=*it;
                 cnt+=j==x.length()-1 ? 1 : 0;
             }
         }
        return cnt;
    }
};