/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// https://leetcode.com/problems/remove-element/
var removeElement = function(nums, val) {
    let pointer=0;
    for (let i=0;i<nums.length;i++){
        //  shift elements to left if it is not equal to val
        if (nums[i] !== val){
            nums[pointer]= nums[i];
            pointer++;
        }
    }
    return pointer;
};