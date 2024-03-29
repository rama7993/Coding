class Solution {
private:
   int ans=0;
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
            ans++;
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
    int totalNQueens(int n) {
        vector<string> grid(n,string(n,'.'));
        solve(grid,0,n);
        return ans;
    }
};