class Solution {
public:
    long long mostPoints(vector<vector<int>>& questions) {
        int n=questions.size();
        long long dp[n+1];
        memset(dp,0,sizeof(dp));
       
        for(int i=n-1;i>=0;i--){
           int points = questions[i][0], jump = questions[i][1];
           dp[i]=max(dp[i+1],points+dp[min(i+1+jump,n)]);
        }
        return dp[0];
    }
};