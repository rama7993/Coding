class Solution {
    public boolean canPartition(int[] nums) {
        int sum=0,m=nums.length;
        for(int i=0;i<m;i++){
            sum+=nums[i];
        }
        if(sum%2!=0) return false;
        sum/=2;
        boolean dp[][]=new boolean[m+1][sum+1];
        for(int i=0;i<m+1;i++){
            for(int j=0;j<sum+1;j++){
                if(i==0 || j==0)
                    dp[i][j]=false;
                else if (j<nums[i-1])
                    dp[i][j]=dp[i-1][j];
                
                else if (j==nums[i-1])
                    dp[i][j]=true;
                else 
                    dp[i][j]=dp[i-1][j-nums[i-1]] || dp[i-1][j];
            }
        }
        return dp[m][sum];
    }
}