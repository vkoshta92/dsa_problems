/**
 * Question: 17_136_single_number (https://leetcode.com/problems/single-number/)
 * 
 * Explanation (Hinglish):
 * Ek array mein har number do baar aaya hai, sirf ek bechara number akela hai. 
 * Humein us akele number ko dhundna hai.
 * Humein XOR (^) use karna hai. XOR ki magic property ye hai ki agar do same numbers ka XOR karein to wo 0 ban jate hain. 
 * To jab saare numbers ka XOR karenge, to jo pairs hain wo khatam ho jayenge aur sirf akela number bachega.
 * 
 * Logic:
 * 1. `xor` variable ko 0 se start karo.
 * 2. Array ke har element ke saath XOR karte jao.
 * 3. Jo value bachegi, wahi single number hai.
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

var singleNumber = function (nums) {
    // bitwise xor   1110- 0000 ->1110;  110-110 ->000
    // If bits are same → 0
    // If bits are different → 1
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }
    return xor;
};