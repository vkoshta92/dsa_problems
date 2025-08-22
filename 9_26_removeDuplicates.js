
/**
 * @param {number[]} nums
 * @return {number}
 */
//  non-decreasing - may be duplicate a[i+1]>= a[i]
// two pointer 
var removeDuplicates = function(nums) {
    let pointer=0; //first index pointer
    for(let i=0;i< nums.length;i++){
        // find unique element
if(nums[i]>nums[pointer]){
    // pointer= pointer+1; // pointer right me shift ho jee
    pointer ++;
 nums[pointer]= nums[i];

}
    }
    return pointer+1; // pointer indepointer bta rha h value ak jyda hogi last indepointer se 
    
};