/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let mp=[];
    for(let x of nums)
        mp[x] = mp[x] ? mp[x]+1:1;
    let res=0;
    for(let x of nums){
        if(!mp[x-1]){//if not previous
            let cnt=0;
            while(mp[x+cnt]){//keep count increasing seq; 
                cnt++;
            }
            res=Math.max(res,cnt);
        }
    }
     return res;
};