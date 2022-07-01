/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(box, truckSize) {
    let ans=0;
    box.sort((a,b)=> b[1]-a[1]);
    for( let [x,y] of box){
        if(truckSize>=x){
            ans+=x*y;
            truckSize-=x;
        }
      
        else
        {ans+=truckSize*y; break;}
    }
    return ans;
};