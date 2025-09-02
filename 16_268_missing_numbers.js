// https://leetcode.com/problems/missing-number/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n= nums.length;
    // total sum calculate

    let totalSum= n * (n+1)/2;

    // let sum=0;
    //  for (let i=0;i<n;i++){
    //     sum += nums[i];
    //  }
    let sum= nums.reduce((acc,curr)=>acc+curr,0)

     return totalSum-sum;

};