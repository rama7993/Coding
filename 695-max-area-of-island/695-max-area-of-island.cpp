class Solution {
private:
    void DFS(vector<vector<int>>& grid,int i,int j,int &cnt){
        if(i<0 || i>=grid.size() || j<0 || j>=grid[0].size() || grid[i][j]!=1 || grid[i][j]==2) return;
       grid[i][j]='2';//make as visit
          // do DFS in all 4 directions
        cnt++;
        DFS(grid, i+1, j,cnt);
        DFS(grid, i, j-1,cnt);
        DFS(grid, i-1, j,cnt);
        DFS(grid, i, j+1,cnt);
    }
public:
int maxAreaOfIsland(vector<vector<int>>& grid) {
int m=grid.size(),n=grid[0].size();
int ans=0;
 for(int i=0;i<m;i++){
     for(int j=0;j<n;j++){
         if(grid[i][j]==1){
             int cnt=0;
             DFS(grid,i,j,cnt);
             ans=max(ans,cnt);
         }
     }
 }  
    return ans;
}
};      