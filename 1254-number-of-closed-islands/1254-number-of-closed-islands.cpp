class Solution {
private:
    int m,n;
    void dfs(vector<vector<int>>& grid, int i, int j) {
        if(i<0 || j<0 || i>=m || j>=n || grid[i][j]==1)
       return;
       grid[i][j] = 1;
       dfs(grid,i-1,j);
       dfs(grid,i,j-1);
       dfs(grid,i+1,j);
       dfs(grid,i,j+1);
    }
public:
    int closedIsland(vector<vector<int>>& grid) {
        int cnt = 0;
       m=grid.size();
       n= grid[0].size();
       
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(i==0 or i==m-1 or j==0 or j==n-1){
                    if(grid[i][j]==0)
                        dfs(grid,i,j);//make as 1;
                }
            }
        }
        
        for(int i=0; i<m; i++)
            for(int j=0; j<n; j++)
                if(grid[i][j]==0){
                    dfs(grid,i,j);
                    cnt++;
                }
                    
        return cnt;
    }
};