/*
 * ==========================================
 * Problem: Partition Equal Subset Sum
 * Difficulty: Medium
 * Companies: Amazon, Google, Microsoft, Meta, Apple
 * LeetCode: #416
 * ==========================================
 *
 * Problem Statement:
 * Given an integer array nums, return true if you can partition the array
 * into two subsets such that the sum of elements in both subsets is equal.
 *
 * Example 1:
 * Input: nums = [1, 5, 11, 5]
 * Output: true
 * Explanation: The array can be partitioned as [1, 5, 5] and [11]
 *              where both subsets have equal sum = 11.
 *
 * Example 2:
 * Input: nums = [1, 2, 3, 5]
 * Output: false
 * Explanation: The array cannot be partitioned into two equal sum subsets.
 *
 * Note: Har element exactly ek baar use hoga (0/1 Knapsack).
 *       Do subsets ka sum equal hona chahiye.
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, yeh 0/1 Knapsack ka variant hai.
 * Humein array ko do subsets mein divide karna hai jinka sum equal ho.
 *
 * Key Observation:
 *   - Agar total sum ODD hai, toh do equal halves ban hi nahi sakte.
 *     Example: sum=7 hai toh 3.5 + 3.5 nahi ho sakta.
 *     Toh seedha false return karo.
 *   - Agar total sum EVEN hai, toh target = sum/2.
 *     Ab problem ban jayegi: "Kya array se target sum bana sakte hain?"
 *     Agar haan, toh doosra subset ka sum bhi target hi hoga.
 *
 * Approach: 0/1 Knapsack DP
 *
 * Step 1: Total sum nikalo. Agar odd hai toh false.
 *
 * Step 2: Target = sum / 2.
 *
 * Step 3: Ek dp array banao of size (target + 1).
 *         dp[j] ka matlab hai: "sum j banana possible hai ya nahi?"
 *         dp[0] = true (sum 0 hamesha possible hai - kuch mat lo)
 *         Baaki sab false.
 *
 * Step 4: Har number ke liye:
 *   - Reverse loop chalao target se num tak.
 *     (Reverse isliye kyunki har element sirf ek baar use ho sakta hai.
 *      Agar forward loop chalaoge toh ek element baar baar use ho jayega.)
 *   - dp[j] = dp[j] || dp[j - num]
 *     (Purana possible tha ya num subtract karke possible hai?)
 *
 * Step 5: Return dp[target].
 *
 * Example walkthrough: nums = [1, 5, 11, 5]
 *   sum = 22, target = 11
 *   dp[0] = true
 *
 *   num=1:  dp[11]=false, dp[10]=false, ..., dp[1]=true
 *   num=5:  dp[11]=false, dp[10]=true (5+5), dp[6]=true (1+5), dp[5]=true
 *   num=11: dp[11]=true (11 itself) -> Done!
 *   Return true: [1,5,5] sum=11, [11] sum=11
 *
 * Key Insight: Reverse loop zaroori hai kyunki 0/1 Knapsack mein
 *              har element sirf ek baar use hota hai.
 */

function canPartition(nums) {
  // Step 1: Total sum nikalo
  const totalSum = nums.reduce((a, b) => a + b, 0);

  // Step 2: Agar sum odd hai toh partition impossible
  if (totalSum % 2 !== 0) return false;

  // Step 3: Target = sum / 2
  const target = totalSum / 2;

  // Step 4: dp array - dp[j] = true if sum j banana possible hai
  const dp = new Array(target + 1).fill(false);
  dp[0] = true; // Base case: sum 0 hamesha possible

  // Step 5: Har number ke liye (0/1 Knapsack - reverse loop)
  for (const num of nums) {
    // Reverse loop: target se num tak (har element sirf ek baar)
    for (let j = target; j >= num; j -= 1) {
      // dp[j] = purana possible tha ya num add karke possible hai?
      dp[j] = dp[j] || dp[j - num];
    }
  }

  // Step 6: Target sum possible hai ya nahi
  return dp[target];
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(n * target)
 *   - n numbers hain
 *   - Har number ke liye target tak loop chalti hai
 *   - Total: O(n * target)
 *   - Note: target = sum/2, so worst case O(n * sum/2) = O(n * sum)
 *
 * Space Complexity: O(target)
 *   - dp array of size (target + 1)
 *   - Total: O(target)
 *   - Note: Agar 2D DP use karte toh O(n * target) hota
 */

// ==========================================
// Test Cases with Expected Output
// ==========================================

// Test Case 1: Valid partition possible
// Expected: true ([1,5,5] and [11] both sum to 11)
console.log(canPartition([1, 5, 11, 5])); // true

// Test Case 2: No valid partition
// Expected: false (sum=11, target=5.5 not possible with integers)
console.log(canPartition([1, 2, 3, 5])); // false

// Test Case 3: Simple equal partition
// Expected: true ([1,2] and [3] - wait, [1,2]=3 and [3]=3)
console.log(canPartition([1, 2, 3])); // true (sum=6, target=3: [1,2] and [3])

// Test Case 4: Single element equal halves
// Expected: true (sum=10, target=5: [5] and [5])
console.log(canPartition([5, 5])); // true

// Test Case 5: Odd sum - impossible
// Expected: false (sum=7, odd number cannot be split equally)
console.log(canPartition([1, 2, 4])); // false

module.exports = { canPartition };
