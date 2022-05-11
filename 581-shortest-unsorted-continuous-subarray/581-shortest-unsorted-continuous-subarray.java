class Solution {
    public int findUnsortedSubarray(int[] nums) {
        int n=nums.length;
        int arr[]=new int[n];
        int i=0,j;
        for(int x:nums)
            arr[i++]=x;
        Arrays.sort(arr);
        for(i=0;i<n;i++){
            if(nums[i]!=arr[i]) break;
        }
        if(i>=n-1) return 0;//already sorted
        for(j=n-1;j>=0;j--){
             if(nums[j]!=arr[j]) break;
        }
        return j-i+1;
    }
}