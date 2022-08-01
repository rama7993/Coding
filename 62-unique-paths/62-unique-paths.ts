function uniquePaths(m: number, n: number): number {
   function paths(m: number, n: number): number{
       if(m<0 || n<0)
           return 0
       if(m==0 && n==0)
           return 1
       if(dp[m][n]!=-1)
           return dp[m][n]
       return dp[m][n]=paths(m,n-1)+paths(m-1,n)
       
   }
   let dp:number[][]=new Array(m+1).fill(null).map(() => new  Array(n+1).fill(-1))
   return paths(m-1,n-1)
};