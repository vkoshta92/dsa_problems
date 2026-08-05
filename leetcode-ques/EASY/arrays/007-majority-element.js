/*
 * Problem: Majority Element
 * Difficulty: Easy
 * Company: Amazon, Google, Microsoft, Facebook, Apple, Goldman Sachs
 *
 * English Problem Statement:
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than n/2 times.
 * You may assume that the majority element always exists in the array.
 *
 * Example 1:
 * Input: nums = [3, 2, 3]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [2, 2, 1, 1, 1, 2, 2]
 * Output: 2
 */

// Approach 1: Boyer-Moore Voting Algorithm (Optimal)
//
// Hinglish Logic:
// Ye algorithm ek "candidate" aur uska "count" maintain karta hai.
// Agar count 0 ho jaye to current element naya candidate ban jata hai.
// Agar current element candidate ke barabar hai to count badhao, warna ghatao.
//
// Kyunki majority element n/2 se zyada baar aata hai, woh hamesha
// survive karega. Baaki sab elements cancel out ho jayenge.
//
// Dry Run: nums = [2, 2, 1, 1, 1, 2, 2]
// candidate=2, count=1
// i=1: nums[1]=2=candidate, count=2
// i=2: nums[2]=1!=candidate, count=1
// i=3: nums[3]=1!=candidate, count=0
// i=4: count=0, candidate=1, count=1
// i=5: nums[5]=2!=candidate, count=0
// i=6: count=0, candidate=2, count=1
// Answer: 2
function majorityElement(nums) {
  // Candidate element and its count
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i += 1) {
    if (count === 0) {
      // Count khatam, naya candidate assign
      candidate = nums[i];
      count = 1;
    } else if (nums[i] === candidate) {
      // Same candidate mila, count badhao
      count += 1;
    } else {
      // Alag element mila, count ghatao
      count -= 1;
    }
  }

  return candidate;
}

// Time Complexity: O(n)
// - Sirf ek pass lagta hai array pe
// - Har element se constant time comparison
//
// Space Complexity: O(1)
// - Sirf 2 variables (candidate, count) use ho rahe
// - Koi extra space nahi

// Console Examples
console.log("=== Majority Element ===");
console.log("Input: [3, 2, 3]");
console.log("Expected: 3 (appears 2 times out of 3)");
console.log("Output:", majorityElement([3, 2, 3]));
console.log("");

console.log("Input: [2, 2, 1, 1, 1, 2, 2]");
console.log("Expected: 2 (appears 4 times out of 7)");
console.log("Output:", majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log("");

console.log("Input: [1]");
console.log("Expected: 1 (single element)");
console.log("Output:", majorityElement([1]));
console.log("");

console.log("Input: [4, 4, 4, 4, 2, 2, 2]");
console.log("Expected: 4 (appears 4 times out of 7)");
console.log("Output:", majorityElement([4, 4, 4, 4, 2, 2, 2]));

module.exports = { majorityElement };
