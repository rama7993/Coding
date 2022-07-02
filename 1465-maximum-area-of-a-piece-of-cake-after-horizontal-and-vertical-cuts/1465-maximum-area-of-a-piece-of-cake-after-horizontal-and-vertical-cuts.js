/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, hoz, ver) {
    let mod = 1e9 + 7;
    hoz.push(h); 
    ver.push(w);
    hoz.sort((a,b)=>a-b);
    ver.sort((a,b)=>a-b);
    let maxh=hoz[0],maxw=ver[0];
    for(let i=1;i<hoz.length;i++){
        maxh=Math.max(maxh,hoz[i]-hoz[i-1]);
    }
    for(let i=1;i<ver.length;i++){
        maxw=Math.max(maxw,ver[i]-ver[i-1]);
    }
    return  BigInt(maxh) * BigInt(maxw) % BigInt(mod)
    
};