/*
|--------------------------------------------------------------------------
| Problem: House Robber II
| Difficulty: Medium
| Companies: Amazon, Google, Meta, Microsoft, Apple, Bloomberg, Uber
| LeetCode: #213
|--------------------------------------------------------------------------
|
| Problem Statement:
| You are a professional robber planning to rob houses along a street.
| Each house has a certain amount of money stashed. All houses at this
| place are arranged in a CIRCLE. That means the first house is the
| neighbor of the last one. Meanwhile, adjacent houses have a security
| system connected, and it will automatically contact the police if two
| adjacent houses are broken into on the same night.
|
| Given an integer array nums representing the amount of money of each
| house, return the maximum amount of money you can rob tonight without
| alerting the police.
|
| Example 1:
| Input: nums = [2,3,2]
| Output: 3
| Explanation: You cannot rob house 1 (money = 2) and then rob house 3
| (money = 2), because they are adjacent houses (circle). So rob house 2.
|
| Example 2:
| Input: nums = [1,2,3,1]
| Output: 4
| Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
| Total amount = 1 + 3 = 4.
|
| Example 3:
| Input: nums = [1,2,3]
| Output: 3
| Rob house 3: 3, or rob house 2: 2, so max = 3.
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, House Robber I ka hi extension hai, bas ek twist ke saath: ab
| houses circle mein hain, matlab first aur last house adjacent hain!
| Tum dono ko ek saath nahi loot sakte.
|
| Approach: Run House Robber I TWICE on subarrays
| -----------------------------------------------
|
| Key Insight: Since first aur last adjacent hain, do cases possible hain:
|
| Case 1: First house chhod do, last house consider karo
|          → Rob houses from index 1 to n-1 (inclusive)
|
| Case 2: Last house chhod do, first house consider karo
|          → Rob houses from index 0 to n-2 (inclusive)
|
| Maximum loot = Math.max(robLinear(nums[0..n-2]), robLinear(nums[1..n-1]))
|
| Base Case: Agar sirf 1 house hai (n === 1), toh seedha uska amount return
| karo kyunki circle mein bhi single house ke liye koi restriction nahi.
|
| House Robber I (Linear) Logic (Space Optimized):
| ------------------------------------------------
| Har house par do choices:
| 1. SKIP current house → previous best (oneBack)
| 2. ROB current house → twoBack + currentMoney (do ghar pahle ka best)
|
| twoBack = max loot 2 houses ago
| oneBack  = max loot 1 house ago (up to previous house)
|
| For current house: current = Math.max(oneBack, twoBack + money)
| Then: twoBack = oneBack, oneBack = current (slide window forward)
|
| Dry Run: nums = [1,2,3,1]
|
| Case 1 (rob houses 0 to n-2): [1,2,3]
|   twoBack=0, oneBack=0
|   money=1: current=max(0,0+1)=1, twoBack=0, oneBack=1
|   money=2: current=max(1,0+2)=2, twoBack=1, oneBack=2
|   money=3: current=max(2,1+3)=4, twoBack=2, oneBack=4
|   Result = 4
|
| Case 2 (rob houses 1 to n-1): [2,3,1]
|   twoBack=0, oneBack=0
|   money=2: current=max(0,0+2)=2, twoBack=0, oneBack=2
|   money=3: current=max(2,0+3)=3, twoBack=2, oneBack=3
|   money=1: current=max(3,2+1)=3, twoBack=3, oneBack=3
|   Result = 3
|
| Final Answer: max(4, 3) = 4 ✓
|
| Dry Run: nums = [2,3,2]
|
| Case 1: [2,3] → rob(2) → max(0,0+2)=2, rob(3) → max(2,0+3)=3 → result=3
| Case 2: [3,2] → rob(3) → max(0,0+3)=3, rob(2) → max(3,0+2)=3 → result=3
|
| Final Answer: max(3, 3) = 3 ✓
|--------------------------------------------------------------------------
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    const n = nums.length;

    // Edge case: only one house
    if (n === 1) {
        return nums[0];
    }

    /**
     * House Robber I (Linear) — space optimized with two variables
     * @param {number[]} houses
     * @param {number} start - inclusive start index
     * @param {number} end - inclusive end index
     * @return {number} max money from houses[start..end]
     */
    function robLinear(start, end) {
        let twoBack = 0;
        let oneBack = 0;

        for (let i = start; i <= end; i += 1) {
            const money = nums[i];
            const current = Math.max(oneBack, twoBack + money);
            twoBack = oneBack;
            oneBack = current;
        }

        return oneBack;
    }

    // Case 1: Rob houses 0 to n-2 (skip last)
    const case1 = robLinear(0, n - 2);

    // Case 2: Rob houses 1 to n-1 (skip first)
    const case2 = robLinear(1, n - 1);

    return Math.max(case1, case2);
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n)
| - robLinear runs twice, each taking O(n) to traverse a subarray.
| - Total: O(2n) = O(n).
|
| Space Complexity: O(1)
| - robLinear uses only two variables (twoBack, oneBack).
| - No DP array, no recursion stack.
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== House Robber II ===");
console.log("");

// Test Case 1: Circular, simple case
console.log("Test 1: nums = [2,3,2]");
console.log("Expected: 3");
console.log("Output:", rob([2, 3, 2]));
console.log("");

// Test Case 2: Circular with more houses
console.log("Test 2: nums = [1,2,3,1]");
console.log("Expected: 4");
console.log("Output:", rob([1, 2, 3, 1]));
console.log("");

// Test Case 3: Single house
console.log("Test 3: nums = [1]");
console.log("Expected: 1");
console.log("Output:", rob([1]));
console.log("");

// Test Case 4: All equal values
console.log("Test 4: nums = [4,4,4,4,4]");
console.log("Expected: 8 (rob 2 alternate houses, skip one due to circle)");
console.log("Output:", rob([4, 4, 4, 4, 4]));
console.log("");

// Test Case 5: Larger circular array
console.log("Test 5: nums = [1,2,3,4,5,1,2,3,4,5]");
console.log("Expected: 16");
console.log("Output:", rob([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
console.log("");

module.exports = { rob };
