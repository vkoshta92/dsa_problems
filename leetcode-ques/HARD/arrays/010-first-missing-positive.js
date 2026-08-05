/*
 * Problem: First Missing Positive
 * Difficulty: Hard
 * Company: Google, Amazon, Microsoft, Facebook, Apple, Adobe
 *
 * English Problem Statement:
 * Given an unsorted integer array nums, return the smallest missing
 * positive integer. You must implement an algorithm that runs in O(n)
 * time and uses O(1) extra space.
 *
 * Example 1:
 * Input: nums = [1, 2, 0]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [3, 4, -1, 1]
 * Output: 2
 *
 * Example 3:
 * Input: nums = [7, 8, 9, 11, 12]
 * Output: 1
 */

// Approach: Cyclic Sort (In-place)
//
// Hinglish Logic:
// Humhe 1 se start hone wali sequence dhundhni hai. Agar hum numbers ko
// apne correct position pe place kar dein (number i should be at index i-1),
// to hum easily dhundh sakte hain ki konsa position galat hai.
//
// Algorithm:
// 1. Har number ko uske correct index pe bhejo: number i should be at index i-1
//    - Agar number 1 <= n hai to uska correct index = number - 1
//    - Swap karo jab tak galat position hai
// 2. Phir ek pass mein dekho: agar nums[i] !== i+1 to answer = i+1
// 3. Agar sab sahi hai to answer = n+1
//
// Constraint: 1 <= nums[i] <= n wale numbers ko handle karte hain.
// Negative numbers aur n se bade numbers ignore hote hain.
//
// Dry Run: nums = [3, 4, -1, 1]
// i=0: nums[0]=3, correct=2, swap: [-1, 4, 3, 1]
//      nums[0]=-1, -1 <= 0? No. Skip.
// i=1: nums[1]=4, correct=3, swap: [-1, 1, 3, 4]
//      nums[1]=1, correct=0, swap: [1, -1, 3, 4]
//      nums[1]=-1, -1 <= 0? No. Skip.
// i=2: nums[2]=3, correct=2. Already correct! Skip.
// i=3: nums[3]=4, correct=3. Already correct! Skip.
// Check: nums[0]=1=0+1? Yes. nums[1]=-1=1+1? No! Answer=2.
function firstMissingPositive(nums) {
  const n = nums.length;

  // Step 1: Cyclic sort - har number ko uske correct position pe
  for (let i = 0; i < n; i += 1) {
    // Jab tak number sahi position pe nahi hai aur valid range mein hai
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const correctIndex = nums[i] - 1;
      // Swap to correct position
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }

  // Step 2: Pehla galat position dhundho
  for (let i = 0; i < n; i += 1) {
    if (nums[i] !== i + 1) return i + 1;
  }

  // Agar sab sahi hai to n+1 answer hai
  return n + 1;
}

// Time Complexity: O(n)
// - Har element sirf ek baar apni correct position pe jaata hai
// - Total swaps <= n hain
// - Second pass bhi O(n)
//
// Space Complexity: O(1)
// - In-place sorting, koi extra space nahi
// - Sirf constant variables

// Console Examples
console.log("=== First Missing Positive ===");
console.log("Input: [1, 2, 0]");
console.log("Expected: 3");
console.log("Output:", firstMissingPositive([1, 2, 0]));
console.log("");

console.log("Input: [3, 4, -1, 1]");
console.log("Expected: 2");
console.log("Output:", firstMissingPositive([3, 4, -1, 1]));
console.log("");

console.log("Input: [7, 8, 9, 11, 12]");
console.log("Expected: 1");
console.log("Output:", firstMissingPositive([7, 8, 9, 11, 12]));
console.log("");

console.log("Input: [1, 2, 3]");
console.log("Expected: 4");
console.log("Output:", firstMissingPositive([1, 2, 3]));

module.exports = { firstMissingPositive };
