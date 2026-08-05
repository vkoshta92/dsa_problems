/*
 * Problem: Two Sum
 * Difficulty: Easy
 * Company relevance: Amazon, Google, Microsoft and most FAANG interviews
 *
 * English problem statement:
 * Given an array of integers nums and an integer target, return the indexes
 * of two different numbers whose sum is equal to target.
 * You may assume that exactly one valid answer exists.
 *
 * Example:
 * nums = [2, 7, 11, 15], target = 9
 * answer = [0, 1], because nums[0] + nums[1] = 2 + 7 = 9
 */

// Approach 1: Brute force
//
// Hinglish logic:
// Har number ko baaki numbers ke saath pair bana kar check karenge.
// Agar nums[i] + nums[j] target ke equal hai, indexes return kar denge.
// Isme koi extra data structure nahi chahiye, lekin pairs bahut zyada check
// karne padte hain.
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

// Time: O(n^2), because every possible pair can be checked.
// Space: O(1), excluding the returned answer.

// Approach 2: HashMap / one-pass solution
//
// Hinglish logic:
// Current number nums[i] ke liye hume complement chahiye:
// complement = target - nums[i]
//
// Pehle dekhenge ki complement map me already present hai ya nahi.
// Present hai to uska index aur current index answer hai.
// Present nahi hai to current number ka index map me store kar denge.
// Current number ko check karne se pehle map check karna zaroori hai, taaki
// same element ko do baar use na karein.
function twoSumHashMap(nums, target) {
  const indexByValue = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i];

    if (indexByValue.has(complement)) {
      return [indexByValue.get(complement), i];
    }

    indexByValue.set(nums[i], i);
  }

  return [];
}

// Time: O(n), because the array is traversed once.
// Space: O(n), because the Map can store up to n values.

// Console examples
const testCases = [
  { nums: [2, 7, 11, 15], target: 9 },
  { nums: [3, 2, 4], target: 6 },
  { nums: [3, 3], target: 6 },
];

for (const testCase of testCases) {
  const { nums, target } = testCase;

  console.log("Input:", { nums, target });
  console.log("Brute force:", twoSumBruteForce(nums, target));
  console.log("HashMap:", twoSumHashMap(nums, target));
  console.log("---");
}
