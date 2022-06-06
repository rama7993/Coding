class Solution {
private:
    vector<vector<string>>ans;
    bool safe(vector<string>&grid,int i,int j,int n){
        int row=i,col=j;
        //left top 45 degree
        while(i>=0 and j>=0){
            if(grid[i][j]=='Q')
                return false;
            i--;
            j--;
        }
        
        i=row;
        j=col;
        //left 0 degree
        while( j>=0){
            if(grid[i][j]=='Q')
                return false;
            j--;
        }
        
        i=row;
        j=col;
        //left bottom 45 degree
        while(i<n and j>=0){
            if(grid[i][j]=='Q')
                return false;
            i++;
            j--;
        }
        
      return true;
    }
    void solve(vector<string>&grid,int col,int n){
        if(col==n){
            ans.push_back(grid);
        }
        for(int row=0;row<n;row++){
            if(safe(grid,row,col,n)){
                grid[row][col]='Q';
                solve(grid,col+1,n);
                grid[row][col]='.';//backtrack
            }
          
        }
    }
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<string> grid(n,string(n,'.'));
        solve(grid,0,n);
        return ans;
    }
};