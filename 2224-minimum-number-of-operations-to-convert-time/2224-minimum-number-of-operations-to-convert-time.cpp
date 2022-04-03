class Solution {
public:
    int convertTime(string current, string correct) {
        stringstream ss1(current),ss2(correct);
        vector<int>v;
        string word;
        while(getline(ss1,word,':'))
            v.push_back(stoi(word));
         while(getline(ss2,word,':'))
            v.push_back(stoi(word));
       
        int diff=(v[2]-v[0])*60 + v[3]-v[1];//minutes
        int cnt=0;
        for(auto &i:{60,15,5,1}){
            cnt+=diff/i;
            diff%=i;
        }
        return cnt;
    }
};