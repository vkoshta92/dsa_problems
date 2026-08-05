/*
 * ==========================================
 * Problem: Move Zeroes
 * Difficulty: Easy
 * Companies: Amazon, Google, Microsoft, Meta, Apple
 * LeetCode: #283
 * ==========================================
 *
 * Problem Statement:
 * Given an integer array nums, move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 *
 * Example 3:
 * Input: nums = [1,2,3,1]
 * Output: [1,2,3,1]
 *
 * Example 4:
 * Input: nums = [0,0,1]
 * Output: [1,0,0]
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, yeh simple two-pointer problem hai. Humein saare zeroes ko end mein
 * bhejna hai, lekin non-zero elements ka relative order maintain rakhna hai.
 *
 * Approach: Slow-Fast Two Pointer
 *
 * Idea: Ek slow pointer rakho jo track karega ki next non-zero element
 * kahan place hona chahiye. Ek fast pointer rakho jo array scan karega.
 *
 * Step 1: slow pointer = 0 (yeh batata hai ki next non-zero element
 *         kis position pe jayega)
 *
 * Step 2: fast pointer array ke saare elements ko scan karega
 *         (fast = 0 to n-1):
 *         - Agar nums[fast] != 0 hai:
 *              nums[slow] aur nums[fast] ko swap kar do
 *              slow++ karo (next non-zero ke liye position aage badhao)
 *         - Agar nums[fast] == 0 hai:
 *              Kuch mat karo, fast pointer apne aap aage badh jayega
 *
 * Step 3: Loop khatam hone ke baad, saare non-zero elements left side pe
 *         aa chuke honge (in order), aur saare zeroes right side pe shift
 *         ho chuke honge.
 *
 * Example Walkthrough: nums = [0, 1, 0, 3, 12]
 *
 * slow=0, fast=0:
 *   nums[0]=0 -> skip (fast moves to 1)
 *
 * slow=0, fast=1:
 *   nums[1]=1 != 0 -> swap(nums[0], nums[1])
 *   Array: [1, 0, 0, 3, 12], slow=1
 *
 * slow=1, fast=2:
 *   nums[2]=0 -> skip (fast moves to 3)
 *
 * slow=1, fast=3:
 *   nums[3]=3 != 0 -> swap(nums[1], nums[3])
 *   Array: [1, 3, 0, 0, 12], slow=2
 *
 * slow=2, fast=4:
 *   nums[4]=12 != 0 -> swap(nums[2], nums[4])
 *   Array: [1, 3, 12, 0, 0], slow=3
 *
 * Final: [1, 3, 12, 0, 0]
 *
 * Key Insight: Slow pointer hamesha us position ko point karta hai jahan
 * next non-zero element ko rakhna hai. Jab bhi fast ko non-zero milta hai,
 * swap kar dete hain. Agar slow == fast hai aur element non-zero hai, toh
 * effectively koi change nahi hota (apne aap se swap). Ye approach maintain
 * karti hai relative order kyunki hum left-to-right scan karte hain aur
 * non-zero elements ko kram mein aage laate hain.
 *
 * Alternate approach (non-swap): Pehle saare non-zero elements ko left mein
 * copy karo (using slow pointer), fir baaki positions ko 0 se fill kar do.
 * Dono approaches O(n) time mein hain, but swap wala zyada elegant hai.
 */

function moveZeroes(nums) {
    let slow = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            // Swap slow aur fast pointers ke elements
            const temp = nums[slow];
            nums[slow] = nums[fast];
            nums[fast] = temp;

            slow++;
        }
    }

    // In-place modification hai, array return karna optional hai
    // LeetCode mein void return type hai, but hum test ke liye return kar rahe hain
    return nums;
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(n)
 *   - Sirf ek baar array traverse karte hain
 *   - Har element pe O(1) operation (ya toh skip, ya swap)
 *   - Swap bhi O(1) hai
 *
 * Space Complexity: O(1)
 *   - In-place algorithm hai
 *   - Sirf do pointers (slow, fast) aur ek temp variable use kar rahe hain
 *   - Koi extra array nahi ban rahi
 */

// ===========================================
// Test Cases with Expected Output
// ===========================================

// Test Case 1: Mixed zeros and non-zeros
console.log("Test 1: nums = [0,1,0,3,12]");
console.log("Expected: [1,3,12,0,0]");
console.log("Output:", moveZeroes([0, 1, 0, 3, 12]));
console.log();

// Test Case 2: Single zero
console.log("Test 2: nums = [0]");
console.log("Expected: [0]");
console.log("Output:", moveZeroes([0]));
console.log();

// Test Case 3: No zeros
console.log("Test 3: nums = [1,2,3,1]");
console.log("Expected: [1,2,3,1]");
console.log("Output:", moveZeroes([1, 2, 3, 1]));
console.log();

// Test Case 4: Leading zeros
console.log("Test 4: nums = [0,0,1]");
console.log("Expected: [1,0,0]");
console.log("Output:", moveZeroes([0, 0, 1]));
console.log();

module.exports = { moveZeroes };
