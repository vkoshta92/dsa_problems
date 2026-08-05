/*
 * ==========================================
 * Problem: Burst Balloons
 * Difficulty: Hard
 * Companies: Amazon, Google, Meta, Microsoft, Apple
 * LeetCode: #312
 * ==========================================
 *
 * Problem Statement:
 * You are given n balloons indexed from 0 to n - 1. Each balloon is painted
 * with a number on it represented by an array nums. You are asked to burst
 * all the balloons.
 *
 * If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1]
 * coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it
 * as if there is a balloon with a 1 painted on it.
 *
 * Return the maximum coins you can collect by bursting the balloons wisely.
 *
 * Example 1:
 * Input: nums = [3, 1, 5, 8]
 * Output: 167
 * Explanation:
 *   nums = [3, 1, 5, 8] -> [3, 5, 8] -> [3, 8] -> [8] -> []
 *   coins =  3*1*5    +   3*5*8   +  3*8*1  + 1*8*1 = 15 + 120 + 24 + 8 = 167
 *
 * Example 2:
 * Input: nums = [1, 5]
 * Output: 10
 * Explanation:
 *   nums = [1, 5] -> [1] -> []
 *   coins = 1*1*5 + 1*1*1 = 5 + ... wait
 *   Actually: burst 5 first: 1*5*1 = 5, then burst 1: 1*1*1 = 1. Total = 10
 *   Or burst 1 first: 1*1*5 = 5, then burst 5: 1*5*1 = 5. Total = 10
 *
 * Note: Order of bursting matters! Humein maximum coins chahiye.
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, yeh Interval DP ki bahut famous problem hai.
 * Problem yeh hai ki balloons ko kis order mein phodna hai taaki
 * maximum coins milen.
 *
 * Naive Approach: Saare permutations try karo - O(n!) time. TLE!
 *
 * Smart Approach: Interval DP (Think in Reverse!)
 *
 * Reverse Thinking:
 *   - Instead of socho ki "kaunsa balloon phodte hain pehle",
 *     socho ki "kaunsa balloon LAST mein phodte hain!"
 *
 *   - Agar humein pata hai ki range (i, j) mein koi balloon k LAST mein phootega,
 *     toh us waqt uske left side (i..k-1) aur right side (k+1..j) sab burst ho chuke hain.
 *     Toh sirf balloon k bacha hai beech mein.
 *     Coins = nums[i] * nums[k] * nums[j]
 *     (i aur j virtual balloons hain boundaries ke liye)
 *
 * Step 1: Array ko extend karo: [1, ...nums, 1]
 *         Yeh 1s boundaries hain (out of bounds ke liye)
 *
 * Step 2: dp[i][j] = maximum coins jo range (i, j) mein burst karne se milenge
 *         Note: i aur j inclusive nahi hain, actual balloons (i+1..j-1) hain
 *
 * Step 3: Length l = 1 se n tak (chhoti ranges se badi ranges tak compute karo)
 *   - Har starting point i
 *   - Ending point j = i + l - 1
 *   - Har possible last balloon k (i se j tak):
 *       coins = extended[i] * extended[k] * extended[j] + dp[i][k] + dp[k][j]
 *       dp[i][j] = max(dp[i][j], coins)
 *
 * Step 4: Answer dp[0][n+1] ya dp[1][n] mein hai (implementation ke hisaab se)
 *
 * Example walkthrough: nums = [3, 1, 5, 8]
 *   extended = [1, 3, 1, 5, 8, 1]
 *   dp[1][4] tak compute karo:
 *     l=1: dp[1][1]=0, dp[2][2]=0, dp[3][3]=0, dp[4][4]=0
 *     l=2: dp[1][2]=3*1*1=3, dp[2][3]=1*5*1=5, dp[3][4]=5*8*1=40
 *     l=3: dp[1][3] = max of k=1,2,3
 *       k=1: 1*3*1 + dp[1][1] + dp[1][3] -> need dp[1][3] first, skip
 *       ... eventually dp[1][3] = 15
 *     l=4: dp[1][4] = 167 (final answer)
 *
 * Key Insight: Last balloon sochne se subproblems independent ho jaate hain!
 *              (i se k-1 aur k+1 se j already computed hain)
 */

function maxCoins(nums) {
  const n = nums.length;

  // Step 1: Extended array with boundary 1s
  const extended = [1, ...nums, 1];

  // Step 2: dp[i][j] = max coins bursting balloons in range (i, j)
  // Note: dp[i][j] means balloons from index i+1 to j-1 in original array
  const dp = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0));

  // Step 3: Length wise compute karo (chhoti ranges pehle)
  for (let len = 1; len <= n; len += 1) {
    // Har starting point
    for (let i = 1; i <= n - len + 1; i += 1) {
      const j = i + len - 1;

      // Har possible last balloon k
      for (let k = i; k <= j; k += 1) {
        // k last mein phootega toh coins:
        // left boundary * balloon k * right boundary + left subarray + right subarray
        const coins =
          extended[i - 1] * extended[k] * extended[j + 1] +
          dp[i][k - 1] +
          dp[k + 1][j];

        // Maximum coins store karo
        dp[i][j] = Math.max(dp[i][j], coins);
      }
    }
  }

  // Step 4: Answer - poori range ka max coins
  return dp[1][n];
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(n^3)
 *   - 3 nested loops:
 *     - Length loop: O(n)
 *     - Start point loop: O(n)
 *     - Last balloon loop: O(n)
 *   - Total: O(n^3)
 *
 * Space Complexity: O(n^2)
 *   - 2D dp array of size (n+2) x (n+2)
 *   - Total: O(n^2)
 */

// ==========================================
// Test Cases with Expected Output
// ==========================================

// Test Case 1: Standard case [3, 1, 5, 8]
// Expected: 167 (optimal order gives max coins)
console.log(maxCoins([3, 1, 5, 8])); // 167

// Test Case 2: Two balloons [1, 5]
// Expected: 10 (burst either first: 1*1*5 + 1*5*1 = 10)
console.log(maxCoins([1, 5])); // 10

// Test Case 3: Single balloon
// Expected: 1 (only 1*1*1 = 1)
console.log(maxCoins([1])); // 1

// Test Case 4: All same values
// Expected: 14 (burst middle first: 2*2*2=8, then sides: 1*2*2+1*2*1=6, total=14)
console.log(maxCoins([2, 2, 2])); // 14

// Test Case 5: Decreasing order
// Expected: 120 (burst 3 first, then 2, then 1: 1*3*1 + 1*2*1 + 1*1*1 = ... wait)
// Actually for [3,2,1]: burst 2 first: 3*2*1=6, then [3,1]: burst 3: 1*3*1=3, then [1]: 1*1*1=1. Total=10
// Or burst 1 first: 2*1*1=2, then [3,2]: burst 3: 1*3*2=6, then [2]: 1*2*1=2. Total=10
// Or burst 3 first: 1*3*2=6, then [2,1]: burst 2: 1*2*1=2, then [1]: 1*1*1=1. Total=9
console.log(maxCoins([3, 2, 1])); // 10

module.exports = { maxCoins };
