/*
 * ==========================================
 * Problem: Coin Change
 * Difficulty: Medium
 * Companies: Amazon, Google, Microsoft, Meta, Apple, Goldman Sachs
 * LeetCode: #322
 * ==========================================
 *
 * Problem Statement:
 * You are given an integer array coins representing coins of different
 * denominations and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins,
 * return -1. You may assume that you have an infinite number of each kind
 * of coin.
 *
 * Example 1:
 * Input: coins = [1, 5, 10, 25], amount = 30
 * Output: 2
 * Explanation: 5 + 25 = 30
 *
 * Example 2:
 * Input: coins = [2], amount = 3
 * Output: -1
 * Explanation: Cannot make 3 using only coin of value 2.
 *
 * Example 3:
 * Input: coins = [1], amount = 0
 * Output: 0
 * Explanation: 0 coins needed to make amount 0.
 *
 * Example 4:
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3
 * Explanation: 5 + 5 + 1 = 11
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, yeh ek classic Dynamic Programming ka problem hai.
 * Humein ek amount banana hai coins se, aur humein minimum coins chahiye.
 *
 * Approach: Bottom-Up DP (Tabulation)
 *
 * Step 1: Ek dp array banao of size (amount + 1).
 *         Har index i ka matlab hai: "amount i banana ho to minimum kitne coins lagenge?"
 *         Initially sab ko Infinity se fill karo kyunki humein pata nahi abhi kitne coins lagenge.
 *
 * Step 2: Base case: dp[0] = 0
 *         Kyunki amount 0 banana hai toh 0 coins lagenge. Yeh obvious hai.
 *
 * Step 3: Har amount i ke liye (1 se amount tak), har coin try karo:
 *         - Agar coin ki value <= current amount i hai,
 *           toh dekho: dp[i - coin] mein kitne coins lage the?
 *           Agar usmein 1 coin aur add karein (yeh coin use karke), toh total kitne ho jayenge?
 *           dp[i] = min(dp[i], dp[i - coin] + 1)
 *
 * Step 4: Agar dp[amount] abhi bhi Infinity hai, matlab amount banana possible nahi hai.
 *         Toh return -1. warna return dp[amount].
 *
 * Example walkthrough: coins = [1, 5, 10, 25], amount = 30
 *   dp[0] = 0
 *   dp[1] = 1 (coin 1)
 *   dp[2] = 2 (coin 1 + coin 1)
 *   ...
 *   dp[5] = 1 (coin 5)
 *   dp[10] = 1 (coin 10)
 *   dp[25] = 1 (coin 25)
 *   dp[30] = min(dp[30-25]+1, dp[30-10]+1, ...) = min(dp[5]+1, dp[20]+1, ...) = min(2, ...) = 2
 *   Answer: 2 coins (25 + 5)
 *
 * Key Insight: Har amount ke liye saare coins try karte hain aur minimum choose karte hain.
 * Yeh "Unbounded Knapsack" jaisa hai kyunki ek coin baar baar use kar sakte hain.
 */

function coinChange(coins, amount) {
  // Step 1: dp array banana - amount+1 size ka, sab Infinity se initialize
  const dp = new Array(amount + 1).fill(Infinity);

  // Step 2: Base case - amount 0 ke liye 0 coins
  dp[0] = 0;

  // Step 3: Har amount ke liye (1 se amount tak)
  for (let i = 1; i <= amount; i += 1) {
    // Har coin try karo
    for (const coin of coins) {
      // Agar coin current amount se chhota ya barabar hai
      // Aur dp[i - coin] reachable hai (Infinity nahi hai)
      if (coin <= i && dp[i - coin] !== Infinity) {
        // dp[i] ko update karo: ya toh purana value, ya naya (dp[i-coin] + 1)
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  // Step 4: Agar amount banana possible nahi hai toh -1, warna dp[amount]
  return dp[amount] === Infinity ? -1 : dp[amount];
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(amount * coins)
 *   - Hum amount tak loop chalaate hain: O(amount)
 *   - Har amount ke liye saare coins try karte hain: O(coins)
 *   - Total: O(amount * coins)
 *
 * Space Complexity: O(amount)
 *   - dp array of size (amount + 1) use ho raha hai
 *   - Extra space: O(amount)
 */

// ==========================================
// Test Cases with Expected Output
// ==========================================

// Test Case 1: Standard case - amount 30 with coins [1, 5, 10, 25]
// Expected: 2 (25 + 5)
console.log(coinChange([1, 5, 10, 25], 30)); // 2

// Test Case 2: Impossible case - only coin 2, amount 3
// Expected: -1
console.log(coinChange([2], 3)); // -1

// Test Case 3: Single coin type, exact match
// Expected: 1 (only coin of value 1 needed)
console.log(coinChange([1], 1)); // 1

// Test Case 4: Multiple coins, amount 11
// Expected: 3 (5 + 5 + 1)
console.log(coinChange([1, 2, 5], 11)); // 3

// Test Case 5: Zero amount - no coins needed
// Expected: 0
console.log(coinChange([1, 2, 5], 0)); // 0

module.exports = { coinChange };
