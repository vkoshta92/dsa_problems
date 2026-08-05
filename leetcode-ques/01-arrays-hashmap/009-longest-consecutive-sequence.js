/*
 * Problem: Longest Consecutive Sequence
 * Difficulty: Medium
 * Company: Google, Facebook, Amazon, Microsoft, Apple, Netflix
 *
 * English Problem Statement:
 * Given an unsorted array of integers nums, return the length of the
 * longest consecutive elements sequence. You must write an algorithm
 * that runs in O(n) time.
 *
 * Example 1:
 * Input: nums = [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive sequence is [1, 2, 3, 4].
 *
 * Example 2:
 * Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
 * Output: 9
 */

// Approach: HashSet
//
// Hinglish Logic:
// 1. Sab numbers ko Set mein daalo (O(1) lookup).
// 2. Sirf un numbers se sequence start karo jinke paas koi chhota
//    number nahi hai (number - 1 Set mein nahi hai).
//    - Agar number-1 exist karta hai to ye sequence ka start nahi hai
//    - Agar number-1 exist nahi karta to ye sequence ka start hai
// 3. Start milne par sequence ki length count karo (number+1, number+2, ...)
//
// Ye approach O(n) hai kyunki har element sirf ek baar visit hota hai
// as sequence start, aur baaki elements sirf Set lookup karte hain.
//
// Dry Run: nums = [100, 4, 200, 1, 3, 2]
// Set = {100, 4, 200, 1, 3, 2}
// 100: 99 in Set? No -> start. 101? No. Length=1.
// 4: 3 in Set? Yes -> skip (not a start)
// 200: 199 in Set? No -> start. 201? No. Length=1.
// 1: 0 in Set? No -> start. 2? Yes, 3? Yes, 4? Yes, 5? No. Length=4.
// 3: 2 in Set? Yes -> skip
// 2: 1 in Set? Yes -> skip
// Answer: 4
function longestConsecutive(nums) {
  // Sab numbers Set mein (unique + O(1) lookup)
  const numberSet = new Set(nums);
  let answer = 0;

  for (const number of numberSet) {
    // Agar number-1 exist karta hai to ye sequence ka start nahi hai
    if (numberSet.has(number - 1)) continue;

    // Sequence start hai, length count karo
    let current = number;
    let length = 1;
    while (numberSet.has(current + 1)) {
      current += 1;
      length += 1;
    }

    // Maximum length update
    answer = Math.max(answer, length);
  }

  return answer;
}

// Time Complexity: O(n)
// - Set banane mein O(n)
// - Har element sirf ek baar sequence start ke liye check hota hai
// - Inner while total O(n) mein saari sequences cover karta hai
//
// Space Complexity: O(n)
// - Set mein n elements store hain

// Console Examples
console.log("=== Longest Consecutive Sequence ===");
console.log("Input: [100, 4, 200, 1, 3, 2]");
console.log("Expected: 4 ([1, 2, 3, 4])");
console.log("Output:", longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log("");

console.log("Input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]");
console.log("Expected: 9 ([0, 1, 2, 3, 4, 5, 6, 7, 8])");
console.log("Output:", longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log("");

console.log("Input: [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]");
console.log("Expected: 7 ([-1, 0, 3, 4, 5, 6, 7])");
console.log("Output:", longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
console.log("");

console.log("Input: []");
console.log("Expected: 0");
console.log("Output:", longestConsecutive([]));

module.exports = { longestConsecutive };
