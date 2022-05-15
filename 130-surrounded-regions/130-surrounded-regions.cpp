class Solution {
private:
    int m,n;
    void dfs(vector<vector<char>>& mat,int i,int j){
     if(i<0 or i>=m or j<0 or j>=n or mat[i][j]!='O')
          return;
    mat[i][j]='1';
    dfs(mat,i+1,j);
    dfs(mat,i-1,j);
    dfs(mat,i,j-1);
    dfs(mat,i,j+1);
    }
public:
    void solve(vector<vector<char>>& board) {
     m=board.size();
     n=board[0].size();
     for(int i=0;i<m;i++){
          for(int j=0;j<n;j++){
              if(i==0 or i==m-1 or  j==0 or j==n-1)//edges
                  dfs(board,i,j);//make as 1;
          }
      }
    
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            if(board[i][j]=='1')
                board[i][j]='O';//reset
            else if(board[i][j]='O')
                board[i][j]='X';//surrounded;
        }
    }
  }
};