/**
 * ============================================================================
 * PROBLEM: Two Sum
 * ============================================================================
 * Ek array diya hai aur ek target value.
 * Hume do aise indices return karne hain jinke elements ka sum = target ho.
 * 
 * ============================================================================
 * APPROACH: Hash Map (2 Pass)
 * ============================================================================
 * Logic:
 * 1. First loop me har element ka value → index map me store karte hain
 * 2. Second loop me har element ke liye check karte hain:
 *    - pair = target - current element
 *    - agar map me present hai aur same index nahi hai → answer mil gaya
 * 
 * Why this works:
 * - Hash map O(1) lookup deta hai
 * - Har element ke liye complement efficiently check kar sakte hain
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - First loop O(n) + second loop O(n)
 * 
 * SPACE COMPLEXITY: O(n)
 * - Hash map me n elements store ho rahe hain
 * ============================================================================
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n= nums.length;
    let map= {}
    for(let i=0;i<n;i++){
        map[nums[i]]=i;
    }
    for (let i=0;i<n;i++){
        let pair= target-nums[i];
        if(map[pair] && map[pair]!=i){ // khud vhi number aa gya to index 0 a ajega
            return [map[pair],i]
        }
    }
    
};

// bruit force

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let n= nums.length;
//     for(let i=0;i<n-1;i++){
//         for(j= i+1;j<n;j++){
//             let sum= nums[i]+nums[j]
//             if(sum === target){
//                 return [i,j]
//             }
//         }
//     }
    
// };