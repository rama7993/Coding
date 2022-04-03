class Solution {
    public void nextPermutation(int[] nums) {
        int i,j,n=nums.length;
        for(i=n-2;i>=0;i--){
            if(nums[i+1]>nums[i])
                break;
        }
        if(i<0) reverse(nums,i+1);
            else{
                for(j=n-1;j>i;j--){
                    if(nums[j]>nums[i])
                        break;
                }
                swap(nums,i,j);
                reverse(nums,i+1);
            }   
  }
    private void reverse(int[] nums, int start) {
        int i = start, j = nums.length - 1;
        while (i < j) {
            swap(nums, i, j);
            i++;
            j--;
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}