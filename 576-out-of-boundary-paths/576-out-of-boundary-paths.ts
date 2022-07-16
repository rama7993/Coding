var mod:number=10**9+7 

function dfs_rec(m: number, n: number, N: number, i: number, j: number,dp):number{
    if(i==m || j==n || i<0 ||j<0) return 1
    if(N==0) return 0
    let strg=i+":"+j+":"+N
    if(dp[strg]!=undefined) return dp[strg]
    let val1:number=dfs_rec(m, n, N - 1, i - 1, j,dp)%mod
    let val2:number=dfs_rec(m, n, N - 1, i + 1, j,dp)%mod
    let val3:number=dfs_rec(m, n, N - 1, i, j - 1,dp)%mod
    let val4:number=dfs_rec(m, n, N - 1, i, j + 1,dp)%mod
    return dp[strg]=(val1+val2+val3+val4)%mod
}

function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    var dp={}
    return dfs_rec(m,n,maxMove,startRow,startColumn,dp)
};