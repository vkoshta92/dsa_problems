/*
 * Problem: Maximum Subarray (Kadane's Algorithm)
 * Difficulty: Medium
 * Company: Amazon, Google, Microsoft, Facebook, Apple, Bloomberg
 *
 * English Problem Statement:
 * Given an integer array nums, find the subarray with the largest sum,
 * and return its sum. A subarray is a contiguous non-empty sequence of
 * elements within an array.
 *
 * Example 1:
 * Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * Output: 6
 * Explanation: The subarray [4, -1, 2, 1] has the largest sum 6.
 *
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 *
 * Example 3:
 * Input: nums = [5, 4, -1, 7, 8]
 * Output: 23
 */

// Approach: Kadane's Algorithm
//
// Hinglish Logic:
// Ye algorithm har index tak ka best (maximum) sum track karta hai.
// Idea ye hai ki agar purana running sum negative ho gaya hai, to usse
// leke koi fayda nahi kyunki woh current number se chhota banayega.
// Isliye jab bhi currentSum negative ho jaye, current number se naya
// subarray start karte hain.
//
// Har step mein do cheezein hoti hain:
// 1. currentSum = max(current number, purana currentSum + current number)
//    - Agar purana sum negative hai to current number单独 better hai
//    - Agar purana sum positive hai to usse add karna better hai
// 2. maxSum = max(maxSum, currentSum)
//    - Har step mein global maximum update karte hain
//
// Dry Run: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// i=0: currentSum=-2, maxSum=-2
// i=1: currentSum=max(1, -2+1)=1, maxSum=1
// i=2: currentSum=max(-3, 1-3)=-2, maxSum=1
// i=3: currentSum=max(4, -2+4)=4, maxSum=4
// i=4: currentSum=max(-1, 4-1)=3, maxSum=4
// i=5: currentSum=max(2, 3+2)=5, maxSum=5
// i=6: currentSum=max(1, 5+1)=6, maxSum=6
// i=7: currentSum=max(-5, 6-5)=1, maxSum=6
// i=8: currentSum=max(4, 1+4)=5, maxSum=6
//
// Answer: 6
function maxSubArray(nums) {
  // currentSum = current subarray ka best sum
  let currentSum = nums[0];
  // maxSum = ab tak ka globally best sum
  let maxSum = nums[0];

  // Array ke baaki elements pe loop
  for (let i = 1; i < nums.length; i += 1) {
    // Ya to purana sum + current, ya sirf current (naya start)
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Global maximum update
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Time Complexity: O(n)
// - Sirf ek baar array traverse karte hain
// - Har element pe constant time ka kaam hota hai
//
// Space Complexity: O(1)
// - Sirf do variables (currentSum, maxSum) use ho rahe hain
// - Koi extra array/data structure nahi hai

// Console Examples with step-by-step output
console.log("=== Maximum Subarray ===");
console.log("Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]");
console.log("Expected: 6 (subarray [4, -1, 2, 1])");
console.log("Output:", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log("");

console.log("Input: [1]");
console.log("Expected: 1");
console.log("Output:", maxSubArray([1]));
console.log("");

console.log("Input: [5, 4, -1, 7, 8]");
console.log("Expected: 23");
console.log("Output:", maxSubArray([5, 4, -1, 7, 8]));
console.log("");

console.log("Input: [-1]");
console.log("Expected: -1 (single negative element)");
console.log("Output:", maxSubArray([-1]));
console.log("");

console.log("Input: [-2, -1]");
console.log("Expected: -1 (best is [-1])");
console.log("Output:", maxSubArray([-2, -1]));

module.exports = { maxSubArray };
