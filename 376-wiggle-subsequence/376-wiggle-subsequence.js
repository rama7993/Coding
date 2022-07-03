/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let n=nums.length,cnt=0,sign=0;
    if(n==1) return 1;
    for(let i=1;i<n;i++){
        if(nums[i]-nums[i-1]<0 && sign!=-1){//peak
            sign=-1;
            cnt++;
        }
        else if(nums[i]-nums[i-1]>0 && sign!=1){//va;;ey
            sign=1;
            cnt++;
        }
    }
    return cnt+1;
};