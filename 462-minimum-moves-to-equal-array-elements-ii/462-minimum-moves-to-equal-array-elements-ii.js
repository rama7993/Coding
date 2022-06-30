/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a,b)=>a-b);
    let n=nums.length;
    let m=Math.floor(n/2);
    var mid=nums[m],sum=0;
    for(let x of nums){
        sum+=Math.abs(x-mid);
    }
    return sum;
};