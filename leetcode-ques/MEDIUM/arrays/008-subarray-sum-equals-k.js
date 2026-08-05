/*
 * Problem: Subarray Sum Equals K
 * Difficulty: Medium
 * Company: Amazon, Google, Facebook, Microsoft, Apple, Bloomberg
 *
 * English Problem Statement:
 * Given an array of integers nums and an integer k, return the total number
 * of subarrays whose sum equals to k. A subarray is a contiguous non-empty
 * sequence of elements within an array.
 *
 * Example 1:
 * Input: nums = [1, 1, 1], k = 2
 * Output: 2
 * Explanation: [1,1] at index 0-1 and [1,1] at index 1-2.
 *
 * Example 2:
 * Input: nums = [1, 2, 3], k = 3
 * Output: 2
 * Explanation: [1,2] and [3] both sum to 3.
 */

// Approach: Prefix Sum + HashMap
//
// Hinglish Logic:
// Agar humein pata ho ki index tak ka prefix sum hai `currentSum`, aur
// humein kisi previous index ka prefix sum `currentSum - k` mil jaaye,
// to beech ka subarray ka sum = k hoga.
//
// Isliye hum ek HashMap maintain karte hain jo har prefix sum ki
// frequency store karta hai.
//
// Algorithm:
// 1. Map mein {0: 1} daalte hain (sum 0 ek baar hua hai, empty prefix)
// 2. Har number ke liye currentSum badhao
// 3. Check karo currentSum - k map mein hai ya nahi
// 4. Agar hai to answer mein uski frequency add karo
// 5. CurrentSum ki frequency map mein update karo
//
// Dry Run: nums = [1, 1, 1], k = 2
// map = {0: 1}, currentSum = 0, answer = 0
// i=0: currentSum=1, check 1-2=-1 in map? No. map={0:1, 1:1}
// i=1: currentSum=2, check 2-2=0 in map? Yes! answer+=1=1. map={0:1,1:1,2:1}
// i=2: currentSum=3, check 3-2=1 in map? Yes! answer+=1=2. map={0:1,1:1,2:1,3:1}
// Answer: 2
function subarraySum(nums, k) {
  // Prefix sum ki frequency map
  // 0: 1 matlab sum 0 ek baar hua hai (empty subarray)
  const prefixCounts = new Map();
  prefixCounts.set(0, 1);

  let currentSum = 0;
  let answer = 0;

  for (const number of nums) {
    // Current prefix sum update
    currentSum += number;

    // Agar currentSum - k pehle se exist karta hai,
    // to us index se yahan tak subarray ka sum = k hai
    answer += prefixCounts.get(currentSum - k) || 0;

    // Current prefix sum ki frequency badhao
    prefixCounts.set(currentSum, (prefixCounts.get(currentSum) || 0) + 1);
  }

  return answer;
}

// Time Complexity: O(n)
// - Sirf ek baar array traverse karte hain
// - Map operations average O(1) hain
//
// Space Complexity: O(n)
// - Worst case mein saare prefix sums different honge
// - Map mein n entries ho sakti hain

// Console Examples
console.log("=== Subarray Sum Equals K ===");
console.log("Input: nums=[1,1,1], k=2");
console.log("Expected: 2 ([1,1] at index 0-1 and [1,1] at index 1-2)");
console.log("Output:", subarraySum([1, 1, 1], 2));
console.log("");

console.log("Input: nums=[1,2,3], k=3");
console.log("Expected: 2 ([1,2] and [3])");
console.log("Output:", subarraySum([1, 2, 3], 3));
console.log("");

console.log("Input: nums=[1], k=1");
console.log("Expected: 1");
console.log("Output:", subarraySum([1], 1));
console.log("");

console.log("Input: nums=[1,-1,0], k=0");
console.log("Expected: 3 ([1,-1], [-1,0], [1,-1,0])");
console.log("Output:", subarraySum([1, -1, 0], 0));

module.exports = { subarraySum };
