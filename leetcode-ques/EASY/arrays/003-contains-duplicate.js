/*
 * Problem: Contains Duplicate
 * Difficulty: Easy
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 *
 * English problem statement:
 * Given an integer array, return true if any value appears at least twice.
 * Otherwise return false.
 *
 * Example:
 * nums = [1, 2, 3, 1] -> true
 * nums = [1, 2, 3, 4] -> false
 */

// Approach 1: Brute force
//
// Hinglish logic:
// Har element ko uske baad ke har element se compare karo. Same value mile
// to duplicate present hai. Ye simple hai, lekin comparisons bahut hote hain.
function containsDuplicateBruteForce(nums) {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
}

// Time: O(n^2)
// Space: O(1), excluding input.

// Approach 2: Sort and compare neighbors
//
// Hinglish logic:
// Sort karne ke baad equal values paas-paas aa jaati hain. Original array ko
// mutate nahi karna ho to slice() se copy banana important production detail hai.
function containsDuplicateBySorting(nums) {
  const sorted = nums.slice().sort((a, b) => a - b);

  for (let i = 1; i < sorted.length; i += 1) {
    if (sorted[i] === sorted[i - 1]) return true;
  }
  return false;
}

// Time: O(n log n)
// Space: O(n) because we avoid mutating the caller's array.

// Approach 3: Set
//
// Hinglish logic:
// Set sirf unique values rakhta hai. Agar current number pehle se Set me hai,
// to duplicate mil gaya. Har value ko ek hi baar process karte hain.
function containsDuplicate(nums) {
  const seen = new Set();

  for (const number of nums) {
    if (seen.has(number)) return true;
    seen.add(number);
  }
  return false;
}

// Time: O(n) average
// Space: O(n)

const testCases = [
  [1, 2, 3, 1],
  [1, 2, 3, 4],
  [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
];

for (const nums of testCases) {
  console.log("Input:", nums);
  console.log("Brute force:", containsDuplicateBruteForce(nums));
  console.log("Sorting:", containsDuplicateBySorting(nums));
  console.log("Set:", containsDuplicate(nums));
  console.log("---");
}

module.exports = {
  containsDuplicateBruteForce,
  containsDuplicateBySorting,
  containsDuplicate,
};
