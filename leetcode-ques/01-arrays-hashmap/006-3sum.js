/*
 * Problem: 3Sum
 * Difficulty: Medium
 * Company: Amazon, Google, Microsoft, Facebook, Apple, Bloomberg, Goldman Sachs
 *
 * English Problem Statement:
 * Given an integer array nums, return all the triplets [nums[i], nums[j],
 * nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * The solution set must not contain duplicate triplets.
 *
 * Example 1:
 * Input: nums = [-1, 0, 1, 2, -1, -4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation: Triplets that sum to zero are (-1, -1, 2) and (-1, 0, 1).
 *
 * Example 2:
 * Input: nums = [0, 1, 1]
 * Output: []
 *
 * Example 3:
 * Input: nums = [0, 0, 0]
 * Output: [[0,0,0]]
 */

// Approach: Sort + Two Pointers
//
// Hinglish Logic:
// 1. Pehle array ko sort karo - taaki duplicate skip karna easy ho
//    aur two pointer approach kaam kare.
//
// 2. Har index i ke liye (0 se n-3 tak), ek fixed element maano
//    aur baaki do elements ke liye two pointer use karo:
//    - left = i + 1 (i ke baad ka sabse chhota)
//    - right = n - 1 (end ka sabse bada)
//
// 3. Agar sum = nums[i] + nums[left] + nums[right]:
//    - sum == 0: triplet mil gaya! Store karo. Dono pointers move karo.
//      Agar same values hain to unhe skip karo (duplicate removal).
//    - sum < 0: left aage badhao (sum badhana hai)
//    - sum > 0: right peeche lao (sum chhota karna hai)
//
// 4. Duplicate skip: Agar nums[i] == nums[i-1] to i skip karo,
//    taaki same triplet baar na aaye.
//
// Dry Run: nums = [-1, 0, 1, 2, -1, -4]
// After sort: [-4, -1, -1, 0, 1, 2]
// i=0, nums[i]=-4: left=1, right=5
//   sum = -4 + (-1) + 2 = -3 < 0, left++
//   sum = -4 + 0 + 2 = -2 < 0, left++
//   sum = -4 + 1 + 2 = -1 < 0, left++
//   left=4, right=5, sum=-4+1+2=-1 < 0, left++
//   left=5, right=5, stop
// i=1, nums[i]=-1: left=2, right=5
//   sum = -1 + (-1) + 2 = 0! Found [-1,-1,2]
//   left=3, right=4: sum = -1+0+1=0! Found [-1,0,1]
//   left=4, right=3, stop
// i=2, nums[i]=-1 (skip, duplicate of i=1)
// Answer: [[-1,-1,2], [-1,0,1]]
function threeSum(nums) {
  // Step 1: Sort array - O(n log n)
  nums.sort((a, b) => a - b);
  const answer = [];

  // Step 2: Har element ke liye fix karo aur two pointers lagao
  for (let i = 0; i < nums.length - 2; i += 1) {
    // Duplicate skip: same element se dobara start mat karo
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    // Step 3: Two pointer search for remaining two elements
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // Triplet found!
        answer.push([nums[i], nums[left], nums[right]]);

        // Left duplicates skip karo
        while (left < right && nums[left] === nums[left + 1]) left += 1;
        // Right duplicates skip karo
        while (left < right && nums[right] === nums[right - 1]) right -= 1;

        // Dono pointers move karo
        left += 1;
        right -= 1;
      } else if (sum < 0) {
        // Sum chhota hai, left aage badhao (bigger value chahiye)
        left += 1;
      } else {
        // Sum bada hai, right peeche lao (smaller value chahiye)
        right -= 1;
      }
    }
  }

  return answer;
}

// Time Complexity: O(n^2)
// - Sorting: O(n log n)
// - Nested loops: O(n) outer * O(n) inner = O(n^2)
// - Overall: O(n^2) dominant term
//
// Space Complexity: O(n) ya O(1)
// - Sorting ke liye O(n) space (depending on sort algorithm)
// - Output array ko count nahi karte
// - Extra variables: O(1)

// Console Examples
console.log("=== 3Sum ===");
console.log("Input: [-1, 0, 1, 2, -1, -4]");
console.log("Expected: [[-1,-1,2],[-1,0,1]]");
console.log("Output:", threeSum([-1, 0, 1, 2, -1, -4]));
console.log("");

console.log("Input: [0, 1, 1]");
console.log("Expected: []");
console.log("Output:", threeSum([0, 1, 1]));
console.log("");

console.log("Input: [0, 0, 0]");
console.log("Expected: [[0,0,0]]");
console.log("Output:", threeSum([0, 0, 0]));
console.log("");

console.log("Input: [-2, 0, 1, 1, 2]");
console.log("Expected: [[-2,0,2],[-2,1,1]]");
console.log("Output:", threeSum([-2, 0, 1, 1, 2]));

module.exports = { threeSum };
