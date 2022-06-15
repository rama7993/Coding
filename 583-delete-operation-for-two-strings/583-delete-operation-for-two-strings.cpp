class Solution {
private:
    vector<vector<int>> dp;
    int func(string &s1,string &s2,int i,int j){
        if(i<0) return j+1;
        if(j<0) return i+1;
        if(dp[i][j]!=-1) return dp[i][j];
        if(s1[i]==s2[j]) 
            return dp[i][j]=func(s1,s2,i-1,j-1);
        return dp[i][j]=1+min(func(s1,s2,i-1,j),func(s1,s2,i,j-1));
    }
public:
    int minDistance(string word1, string word2) {
        int m=word1.length(),n=word2.length();
        dp.resize(m,vector<int>(n,-1));
        return func(word1,word2,m-1,n-1);
    }
};