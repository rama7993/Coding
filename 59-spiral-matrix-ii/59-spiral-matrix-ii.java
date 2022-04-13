class Solution {
    public int[][] generateMatrix(int n) {
        int cnt=0;
        int[][] mat=new int[n][n];
        int top=0,bot=n-1,lft=0,rght=n-1;
        int dir=0;
        while(top<=bot && lft<=rght){
            if(dir==0){
                for(int i=lft;i<=rght;i++){
                mat[top][i]=++cnt;
              }
                top++;
            }
            else if(dir==1){
                for(int i=top;i<=bot;i++){
                mat[i][rght]=++cnt;
              }
               rght--;
            }
            else if(dir==2){
                for(int i=rght;i>=lft;i--){
                mat[bot][i]=++cnt;
              }
               bot--;
            }
            else{
               for(int i=bot;i>=top;i--){
                mat[i][lft]=++cnt;
              }
               lft++;
            }
            dir=(dir+1)%4;
        }
        return mat;
    }
}