/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(card, k) {
    var n=card.length;
    let f=new Array(n),b=new Array(n),ans=0;
    f[0]=card[0];
    b[n-1]=card[n-1];
    for(let i=1;i<n;i++){
        f[i]=card[i]+f[i-1];
        b[n-1-i]=card[n-1-i]+b[n-i];
    }
    
    for(let i=0;i<k-1;i++){
        ans=Math.max(ans,f[i]+b[n-k+i+1]);
    }
    if(n==2) return b[0];
    return Math.max(ans,f[k-1],b[n-k]);
};