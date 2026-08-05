/*
 * ==========================================
 * Problem: Jump Game II
 * Difficulty: Medium
 * Companies: Amazon, Google, Meta, Microsoft, Apple
 * LeetCode: #45
 * ==========================================
 *
 * Problem Statement:
 * You are given a 0-indexed array of integers nums of length n.
 * You are initially positioned at nums[0].
 * Each element nums[i] represents the maximum jump length from position i.
 * In other words, if you are at nums[i], you can jump to any nums[i+j] where
 * 0 <= j <= nums[i] and i + j < n.
 * Return the minimum number of jumps to reach nums[n - 1].
 * The test cases are generated such that you can always reach nums[n - 1].
 *
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: 2
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Example 2:
 * Input: nums = [2,3,0,1,4]
 * Output: 2
 * Explanation: Jump 1 step from 0 to 1, then 3 steps to 4.
 *
 * Example 3:
 * Input: nums = [1,2,3]
 * Output: 2
 * Explanation: Jump 1: 0->1, Jump 2: 1->2 (or 0->1->2).
 *
 * Example 4:
 * Input: nums = [1,2,1,1,1]
 * Output: 3
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, yeh problem mein humein minimum jumps count karni hai last index
 * tak pahunchne ke liye. Har index se aap max utni door tak jump kar sakte ho
 * jitni value di gayi hai.
 *
 * Approach: Greedy BFS (Level Order Traversal on 1D Array)
 *
 * Idea: Array ko levels mein bant sakte hain:
 *   Level 0: [0] (starting position)
 *   Level 1: All positions reachable from Level 0 in 1 jump
 *   Level 2: All positions reachable from Level 1 in 1 jump, jo Level 0/1 mein nahi hain
 *   ... and so on
 *
 * Step 1: currentReach = 0 (current jump se max kitni door tak jaa sakte hain)
 *         maxReach = 0   (ab tak ka global max reach)
 *         jumps = 0      (jump count)
 *
 * Step 2: Array traverse karo index 0 se (last index ko chhod ke):
 *         - maxReach = max(maxReach, i + nums[i]) => har point pe dekho aage kitna cover ho sakta hai
 *         - Agar i == currentReach hai:
 *              Matlab current level khatam ho gaya, ab next level mein jump karna padega.
 *              jumps++
 *              currentReach = maxReach (agli baar itna door tak ke indices cover honge)
 *
 * Step 3: Jab currentReach >= last index ho jaye, answer mil gaya.
 *
 * Example Walkthrough: nums = [2, 3, 1, 1, 4]
 *
 * currentReach = 0, maxReach = 0, jumps = 0
 *
 * i=0: nums[0]=2, maxReach = max(0, 0+2) = 2
 *      i == currentReach (0 == 0)? YES!
 *      jumps = 1, currentReach = 2
 *      (matlab: 1 jump mein index 2 tak pahunch sakte ho)
 *
 * i=1: nums[1]=3, maxReach = max(2, 1+3) = 4
 *      i == currentReach (1 == 2)? No
 *
 * i=2: nums[2]=1, maxReach = max(4, 2+1) = 4
 *      i == currentReach (2 == 2)? YES!
 *      jumps = 2, currentReach = 4
 *      (matlab: 2 jumps mein index 4 tak pahunch sakte ho)
 *
 * i=3: nums[3]=1, maxReach = max(4, 3+1) = 4
 *      i == currentReach (3 == 4)? No
 *
 * Loop end (i < n-1), jumps = 2. Answer: 2
 *
 * Key Insight: Yeh approach O(n) time mein kaam karti hai aur O(1) space
 * use karti hai. Har jump ki boundary ko track kar rahe hain. Jaise hi
 * current boundary khatam hoti hai, jump increment karte hain aur
 * next boundary set karte hain.
 *
 * Isko aise socho: Tum BFS kar rahe ho level by level. Har level = 1 jump.
 * currentReach batata hai ki current level ka end kahan hai.
 * maxReach batata hai ki next level ka end kahan hoga.
 */

function jump(nums) {
    const n = nums.length;
    if (n <= 1) return 0;

    let jumps = 0;
    let currentReach = 0;
    let maxReach = 0;

    // Last index tak loop (last index ko include nahi karte, kyunki wahan pahunchne
    // ke baad jump count karna unnecessary hai)
    for (let i = 0; i < n - 1; i++) {
        // Har position se maximum reach update karo
        maxReach = Math.max(maxReach, i + nums[i]);

        // Agar current level ki boundary par pahunch gaye
        if (i === currentReach) {
            jumps++;
            currentReach = maxReach;

            // Agar current reach already last index tak ya usse aage hai
            if (currentReach >= n - 1) break;
        }
    }

    return jumps;
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(n)
 *   - Sirf ek baar array traverse karte hain (0 to n-2)
 *   - Har element pe constant time operations
 *
 * Space Complexity: O(1)
 *   - Sirf teen variables: jumps, currentReach, maxReach
 *   - Koi extra data structure use nahi kiya
 */

// ===========================================
// Test Cases with Expected Output
// ===========================================

// Test Case 1: Classic example
console.log("Test 1: nums = [2,3,1,1,4]");
console.log("Expected: 2 (0->1->4)");
console.log("Output:", jump([2, 3, 1, 1, 4]));
console.log();

// Test Case 2: Alternative path with 0 in middle
console.log("Test 2: nums = [2,3,0,1,4]");
console.log("Expected: 2 (0->1->4)");
console.log("Output:", jump([2, 3, 0, 1, 4]));
console.log();

// Test Case 3: Small step jumps
console.log("Test 3: nums = [1,2,3]");
console.log("Expected: 2 (0->1->2)");
console.log("Output:", jump([1, 2, 3]));
console.log();

// Test Case 4: One-by-one stepping
console.log("Test 4: nums = [1,2,1,1,1]");
console.log("Expected: 3 (0->1->2->4)");
console.log("Output:", jump([1, 2, 1, 1, 1]));
console.log();

module.exports = { jump };
