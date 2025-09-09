// https://leetcode.com/problems/single-number/description/




/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     let hash={};
//     for(let i=0;i<nums.length;i++){
//         if (!hash[nums[i]]){
//             hash[nums[i]]=1;
//         }
//         else{
//             hash[nums[i]]++;
//         }
//     }
//     for (let i=0;i<nums.length;i++){
//         if (hash[nums[i]]===1){
//             return nums[i];
//         }
//     }
// };

var singleNumber = function(nums) {
// bitwise xor   1110- 0000 ->1110;  110-110 ->000
// If bits are same → 0
// If bits are different → 1
let xor =0;
for (let i =0;i<nums.length;i++){
    xor= xor ^ nums[i];
}
return xor;
};