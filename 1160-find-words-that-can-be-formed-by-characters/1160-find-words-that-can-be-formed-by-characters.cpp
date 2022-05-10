class Solution {
public:
    int countCharacters(vector<string>& words, string chars) {
        vector<int>v(26,0);
        int res=0;
        for(auto &x:chars)
            v[x-'a']++;
        for(auto &x:words){
             int cnt[26]={0},flag=1;
             for(auto &y:x){
                 cnt[y-'a']++;
                 if(cnt[y-'a']>v[y-'a']){
                     flag=0;
                     break;
                 }
            }
           if(flag) res+= x.length();
        }
        return res;
    }
};