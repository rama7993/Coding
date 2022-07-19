function generate(numRows: number): number[][] {
var arr:Array<Array<number>>=[]
for(let i=0;i<numRows;i++){
    const res:Array<number>=[]
    for(let j=0;j<=i;j++){
        if(j==0 || j==i)
            res.push(1)
        else
            res.push(arr[i-1][j-1]+arr[i-1][j])
        
    }
    arr.push(res)
}
    return arr
};