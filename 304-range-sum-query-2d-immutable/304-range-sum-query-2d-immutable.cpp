class NumMatrix {
private:
    vector<vector<int>> mat;
public:
    NumMatrix(vector<vector<int>>& matrix) {
        int m=matrix.size(),n=matrix[0].size();
        mat=matrix;
        for(int i=1;i<m;i++){//add row wise sum
            for(int j=0;j<n;j++){
                mat[i][j]+=mat[i-1][j];
            }
        }
        
        for(int i=0;i<m;i++){//add column wise sum
            for(int j=1;j<n;j++){
                mat[i][j]+=mat[i][j-1];
            }
        }
        
    }
    
    int sumRegion(int row1, int col1, int row2, int col2) {
        return mat[row2][col2] - (row1?mat[row1-1][col2]:0 ) -(col1 ? mat[row2][col1-1]:0 )+ ((row1 && col1) ? mat[row1-1][col1-1] :0 );
    // removal= mat[row1-1][col2]+mat[row2][col1-1]-mat[row1-1][col1-1];
    }
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix* obj = new NumMatrix(matrix);
 * int param_1 = obj->sumRegion(row1,col1,row2,col2);
 */