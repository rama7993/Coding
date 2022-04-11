class Solution {
public:
    vector<vector<int>> shiftGrid(vector<vector<int>>& grid, int k) {
        int m=grid.size(),n=grid[0].size();
        vector<int>arr(m*n);//single array
        
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                arr[i*n+j]=grid[i][j];
            }
        }
        
        k%=m*n;//rotate array k times
        reverse(arr.begin(), arr.end());
        reverse(arr.begin(), arr.begin()+k);
        reverse(arr.begin()+k, arr.end());
        
      vector<vector<int>>res(m,vector<int>(n,0));
      for(int i=0;i<m*n;i++)
          res[i/n][i%n]=arr[i];
      return res;
    }
};