/* Problem: Combination Sum | Difficulty: Medium
 * Companies: Amazon, Google, Microsoft, Facebook, Apple, Uber
 *
 * Given an array of distinct positive integers candidates and a target integer
 * target, return a list of all unique combinations of candidates where the
 * chosen numbers sum to target. The same number may be chosen from candidates
 * an unlimited number of times. Two combinations are unique if the frequency
 * of at least one of the chosen numbers is different.
 *
 * Example 1:
 * Input: candidates = [2,3,6,7], target = 7
 * Output: [[2,2,3],[7]]
 * Explanation: 2 + 2 + 3 = 7, and 7 = 7. These are the only valid combinations.
 *
 * Example 2:
 * Input: candidates = [2,3,5], target = 8
 * Output: [[2,2,2,2],[2,3,3],[3,5]]
 *
 * Example 3:
 * Input: candidates = [2], target = 1
 * Output: []
 *
 * Hinglish Detailed Logic:
 * ------------------------
 * Bhai, yeh classic backtracking problem hai. Humare paas candidates array
 * hai aur ek target hai. Humein woh sab combinations dhundni hai jinka sum
 * target ke barabar ho.
 *
 * Key insight: Har candidate ko hum unlimited baar use kar sakte hain!
 * Iska matlab hai ki jab hum ek candidate choose karein, toh usi index
 * par rah sakte hain (dobara use karne ke liye). Agar candidate skip
 * karna hai toh aage badh sakte hain.
 *
 * Algorithm:
 * 1. Start from index 0, with empty path and remaining = target.
 * 2. For each index i from start to end:
 *    a. Agar remaining 0 hai toh path copy karke answer mein daal do.
 *    b. Agar remaining negative hai toh return karo (backtrack).
 *    c. Candidate ko path mein add karo.
 *    d. Recurse with SAME index (kyunki reuse allowed hai) aur
 *       remaining - candidate.
 *    e. Backtrack: path se candidate hatao.
 * 3. Jab sab options explore ho jayein, return answer.
 *
 * Tricky part: Loop mein `i = start` se start karte hain, `i = i + 1` se
 * aage badhte hain. Recursive call mein `i` pass karte hain (NOT i+1)
 * kyunki same element dobaar use kar sakte hain.
 *
 * Dry run: candidates = [2,3], target = 5
 * - i=0, pick 2, remaining=3 -> i=0, pick 2, remaining=1 -> i=0, pick 2, remaining=-1 (backtrack)
 * - i=0, pick 2, remaining=3 -> i=1, pick 3, remaining=0 -> FOUND [2,3]
 * - i=1, pick 3, remaining=2 -> i=1, pick 3, remaining=-1 (backtrack)
 * Answer: [[2,3]]
 */

function combinationSum(candidates, target) {
  const answer = [];

  function backtrack(start, path, remaining) {
    // Base case: agar target 0 ho gaya toh combination mil gaya
    if (remaining === 0) {
      answer.push(path.slice()); // path ka copy save karo
      return;
    }

    // Agar target negative ho gaya toh yeh path valid nahi hai
    if (remaining < 0) {
      return;
    }

    // Har candidate ko try karo starting from 'start' index
    for (let i = start; i < candidates.length; i += 1) {
      // Candidate ko path mein add karo
      path.push(candidates[i]);

      // Recurse with SAME index (reuse allowed!) and reduced target
      // i pass karte hain taaki same element dobaar choose kar sakein
      backtrack(i, path, remaining - candidates[i]);

      // Backtrack: path se last element hatao taaki next option try ho sake
      path.pop();
    }
  }

  backtrack(0, [], target);
  return answer;
}

// ============ Test Cases ============

// Test 1: Basic case - [2,3,6,7], target 7
// Expected: [[2,2,3],[7]]
console.log("Test 1:", JSON.stringify(combinationSum([2, 3, 6, 7], 7)));
// Output: [[2,2,3],[7]]

// Test 2: Multiple combinations - [2,3,5], target 8
// Expected: [[2,2,2,2],[2,3,3],[3,5]]
console.log("Test 2:", JSON.stringify(combinationSum([2, 3, 5], 8)));
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// Test 3: No solution possible - [2], target 1
// Expected: []
console.log("Test 3:", JSON.stringify(combinationSum([2], 1)));
// Output: []

// Test 4: Single element repeated - [3], target 9
// Expected: [[3,3,3]]
console.log("Test 4:", JSON.stringify(combinationSum([3], 9)));
// Output: [[3,3,3]]

// Test 5: Larger example - [2,3,7], target 7
// Expected: [[2,2,3],[7]]
console.log("Test 5:", JSON.stringify(combinationSum([2, 3, 7], 7)));
// Output: [[2,2,3],[7]]

/*
 * Time Complexity: O(N^(T/M))
 *   where N = number of candidates, T = target value, M = minimum candidate value
 *   Worst case mein hum N choices ko T/M times expand kar sakte hain
 *   (jab sab candidates same ho ya bahut chhote ho).
 *
 * Space Complexity: O(T/M)
 *   Recursion depth最多 target/min(candidates) hogi.
 *   Har level pe ek element add hota hai.
 */

module.exports = { combinationSum };
