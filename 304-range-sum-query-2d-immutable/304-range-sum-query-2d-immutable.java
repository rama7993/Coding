class NumMatrix {
    private int[][] prefix;

    public NumMatrix(int[][] matrix) {
        int m=matrix.length,n=matrix[0].length;
        prefix=new int[m][n+1];//consider as 'm' 1d arrays
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                prefix[i][j+1]=prefix[i][j]+matrix[i][j];
            }
        }
        
    }
    
    public int sumRegion(int row1, int col1, int row2, int col2) {
        int sum=0;
        for(int i=row1;i<=row2;i++)
            sum+=prefix[i][col2+1]-prefix[i][col1];//for m rows
        return sum;
            
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix obj = new NumMatrix(matrix);
 * int param_1 = obj.sumRegion(row1,col1,row2,col2);
 */