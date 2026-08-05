/*
 * ==========================================
 * Problem: Find the Duplicate Number
 * Difficulty: Medium
 * Companies: Amazon, Google, Microsoft, Meta, Apple
 * LeetCode: #287
 * ==========================================
 *
 * Problem Statement:
 * Given an array of integers nums containing n + 1 integers where each
 * integer is in the range [1, n] inclusive. There is only one repeated
 * number in nums, return this repeated number.
 *
 * You must solve the problem without modifying the array nums and using
 * only constant extra space.
 *
 * Example 1:
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 *
 * Example 2:
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 *
 * Example 3:
 * Input: nums = [3,3,3,3,3]
 * Output: 3
 *
 * Example 4:
 * Input: nums = [1,1]
 * Output: 1
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, yeh problem kaafi interesting hai. Humein O(n) time aur O(1) space
 * mein duplicate number find karna hai bina array modify kiye.
 *
 * Approach: Floyd's Cycle Detection (Tortoise and Hare)
 *
 * Key Insight: Array ko linked list ki tarah treat karo jahan:
 *   nums[i] = next index to visit
 *   Har node ki value uska next pointer hai
 *
 * Kyunki array mein n+1 numbers hain aur range [1, n] hai:
 *   - Duplicate number ek cycle create karta hai
 *   - Har number range mein hai (1 to n), isliye index out of bounds
 *     kabhi nahi hoga
 *
 * Step 1: Cycle Detection (Floyd's Algorithm)
 *         - slow = nums[0], fast = nums[0]
 *         - do-while loop:
 *              slow = nums[slow] (1 step)
 *              fast = nums[nums[fast]] (2 steps)
 *         - Jab tak slow != fast, loop chalta rahega
 *         - Jab slow == fast, matlab cycle detect ho gayi
 *
 * Step 2: Find Cycle Entry Point (Duplicate Number)
 *         - slow ko wapas array ke start pe le jao: slow = nums[0]
 *         - Ab dono 1-1 step se chalo:
 *              slow = nums[slow]
 *              fast = nums[fast]
 *         - Jab slow == fast ho jaye, wahi duplicate number hai!
 *
 * Example Walkthrough: nums = [1, 3, 4, 2, 2]
 *
 * Array indices: 0  1  2  3  4
 * Values:        1  3  4  2  2
 *
 * Isko linked list ki tarah visualize karo:
 *   index 0 -> value 1  (means: goto index 1)
 *   index 1 -> value 3  (means: goto index 3)
 *   index 2 -> value 4  (means: goto index 4)
 *   index 3 -> value 2  (means: goto index 2)
 *   index 4 -> value 2  (means: goto index 2)
 *
 * The linked list: 0 -> 1 -> 3 -> 2 -> 4 -> 2 -> 4 -> 2 -> ...
 *                                                  ^         |
 *                                                  |_________|
 * Cycle hai: 2 -> 4 -> 2
 *
 * Phase 1 - Find intersection point:
 *   slow = nums[0] = 1, fast = nums[0] = 1
 *   Iteration 1: slow = nums[1] = 3, fast = nums[nums[1]] = nums[3] = 2
 *   Iteration 2: slow = nums[3] = 2, fast = nums[nums[2]] = nums[4] = 2
 *   slow == fast (2 == 2) -> intersection at index 2 (value 2)
 *
 * Phase 2 - Find entry point:
 *   slow = nums[0] = 1 (back to start)
 *   Iteration 1: slow = nums[1] = 3, fast = nums[2] = 4
 *   Iteration 2: slow = nums[3] = 2, fast = nums[4] = 2
 *   slow == fast (2 == 2) -> DUPLICATE = 2
 *
 * Answer: 2
 *
 * Why does Phase 2 work?
 *   Let distance from start to cycle entry = p
 *   Let distance from cycle entry to intersection = c
 *   Let cycle length = L
 *
 *   slow traveled: p + c
 *   fast traveled: p + c + n*L (where n is some number of full cycles)
 *
 *   Since fast is twice as fast: 2*(p + c) = p + c + n*L
 *   => 2p + 2c = p + c + n*L
 *   => p + c = n*L
 *   => p = n*L - c
 *
 *   So distance from start to entry (p) equals distance from intersection
 *   to entry going forward (n*L - c). That's why starting slow from
 *   the beginning and moving both 1 step at a time makes them meet
 *   at the cycle entry point!
 */

function findDuplicate(nums) {
    // Phase 1: Find intersection inside the cycle
    let slow = nums[0];
    let fast = nums[0];

    // Do-while loop: pehle ek step chalo, fir check karo
    do {
        slow = nums[slow];           // 1 step
        fast = nums[nums[fast]];     // 2 steps
    } while (slow !== fast);

    // Phase 2: Find the cycle entry point (duplicate)
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow; // ya fast, dono same jagah hain
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(n)
 *   - Phase 1: slow aur fast pointers cycle detect karne mein O(n) steps
 *     lete hain (worst case: p + c steps)
 *   - Phase 2: cycle entry point dhundhne mein O(n) steps (at most p steps)
 *   - Total: O(n)
 *
 * Space Complexity: O(1)
 *   - Sirf do pointers (slow, fast) use ho rahe hain
 *   - Array modify nahi kar rahe
 *   - Koi hash set ya extra array nahi bana rahe
 */

// ===========================================
// Test Cases with Expected Output
// ===========================================

// Test Case 1: Duplicate at multiple positions
console.log("Test 1: nums = [1,3,4,2,2]");
console.log("Expected: 2");
console.log("Output:", findDuplicate([1, 3, 4, 2, 2]));
console.log();

// Test Case 2: Duplicate near start
console.log("Test 2: nums = [3,1,3,4,2]");
console.log("Expected: 3");
console.log("Output:", findDuplicate([3, 1, 3, 4, 2]));
console.log();

// Test Case 3: All same number
console.log("Test 3: nums = [3,3,3,3,3]");
console.log("Expected: 3");
console.log("Output:", findDuplicate([3, 3, 3, 3, 3]));
console.log();

// Test Case 4: Smallest case
console.log("Test 4: nums = [1,1]");
console.log("Expected: 1");
console.log("Output:", findDuplicate([1, 1]));
console.log();

module.exports = { findDuplicate };
