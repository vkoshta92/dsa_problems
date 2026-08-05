/*
 * Problem: Summary Ranges
 * Difficulty: Easy
 * Companies: Amazon, Google, Microsoft, Meta
 *
 * Problem Statement:
 * You are given a sorted unique integer array nums.
 * A range [a,b] is the set of all integers from a to b (inclusive).
 * Return the smallest sorted list of ranges that cover all the numbers
 * in the array exactly. That is, each element of nums is covered by
 * exactly one of the ranges, and there is no integer x such that x
 * is in one of the ranges but not in nums.
 *
 * Each range [a,b] should be output as:
 *   "a->b" if a != b
 *   "a" if a == b
 *
 * Example 1:
 *   Input: nums = [0,1,2,4,5,7]
 *   Output: ["0->2","4->5","7"]
 *   Explanation: The ranges are [0,2], [4,5], [7,7]
 *
 * Example 2:
 *   Input: nums = [0,2,4,6,8]
 *   Output: ["0","2","4","6","8"]
 *   Explanation: Each element is its own range since no two are consecutive.
 *
 * Example 3:
 *   Input: nums = []
 *   Output: []
 *
 * Example 4:
 *   Input: nums = [0]
 *   Output: ["0"]
 */

/*
 * ======================== HINGLISH LOGIC EXPLANATION ========================
 *
 * Bhai, yeh problem mein humko sorted array mein consecutive ranges find karni hain.
 *
 * Step 1: Pehle check karo array empty hai toh empty array return karo.
 *
 * Step 2: Ab hum ek pointer 'start' rakhenge jo current range ka beginning track karega.
 *   - Start ko pehle element pe set karo (nums[0]).
 *
 * Step 3: Ab array mein traverse karo (i = 1 se nums.length tak):
 *   - Check karo kya current element (nums[i]) previous element (nums[i-1]) ke
 *     seedha agla hai ya nahi (nums[i] === nums[i-1] + 1).
 *   - Agar haan, toh range continue ho rahi hai, kuch mat karo, aage badho.
 *   - Agar nahi, toh range toot gayi hai. Ab previous range ko format karo:
 *     * Agar start === nums[i-1] matlab range mein sirf ek number hai, toh sirf "start" likho.
 *     * Nahi toh "start->nums[i-1]" likho.
 *   - Ab naya range start karo: start = nums[i] rakh do.
 *
 * Step 4: Loop ke baad, last range ko bhi add karo jo abhi tak add nahi hua.
 *   (Kyunki loop mein sirf tootne pe add hota hai, last range ka kaun add karega?)
 *   - Same logic: start === nums[nums.length-1] ho toh "start" warna "start->nums[nums.length-1]"
 *
 * Step 5: Result array return karo.
 *
 * Example walkthrough: nums = [0,1,2,4,5,7]
 *   - start = 0, i=1: nums[1]=1 == nums[0]+1, continue
 *   - i=2: nums[2]=2 == nums[1]+1, continue
 *   - i=3: nums[3]=4 != nums[2]+1, range toota! start(0) != nums[2](2), add "0->2"
 *          start = 4
 *   - i=4: nums[4]=5 == nums[3]+1, continue
 *   - i=5: nums[5]=7 != nums[4]+1, range toota! start(4) != nums[4](5), add "4->5"
 *          start = 7
 *   - Loop end. Last range add karo: start(7) == nums[5](7), add "7"
 *   - Result: ["0->2","4->5","7"]
 *
 * ======================== TIME & SPACE COMPLEXITY ========================
 * Time Complexity:  O(n) - sirf ek baar array traverse kar rahe hain
 * Space Complexity: O(1) - sirf result array ke alawa koi extra space nahi (output space excluded)
 * ======================== TIME & SPACE COMPLEXITY ========================
 */

function summaryRanges(nums) {
    // Edge case: empty array
    if (nums.length === 0) return [];

    const result = [];
    let start = 0; // current range ka start index

    for (let i = 1; i <= nums.length; i++) {
        // Jab range toot jaye ya array khatam ho jaye
        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
            // Range format karo
            if (start === i - 1) {
                // Single element range
                result.push(String(nums[start]));
            } else {
                // Range with multiple elements
                result.push(`${nums[start]}->${nums[i - 1]}`);
            }
            // Naya range start karo
            if (i < nums.length) {
                start = i;
            }
        }
    }

    return result;
}

/*
 * ======================== TEST CASES ========================
 */

// Test Case 1: Mixed consecutive and gaps
// Input: [0,1,2,4,5,7]
// Expected Output: ["0->2","4->5","7"]
console.log("Test 1 - [0,1,2,4,5,7]:", summaryRanges([0, 1, 2, 4, 5, 7]));
// Expected: ["0->2","4->5","7"]

// Test Case 2: All isolated elements
// Input: [0,2,4,6,8]
// Expected Output: ["0","2","4","6","8"]
console.log("Test 2 - [0,2,4,6,8]:", summaryRanges([0, 2, 4, 6, 8]));
// Expected: ["0","2","4","6","8"]

// Test Case 3: Empty array
// Input: []
// Expected Output: []
console.log("Test 3 - []:", summaryRanges([]));
// Expected: []

// Test Case 4: Single element
// Input: [0]
// Expected Output: ["0"]
console.log("Test 4 - [0]:", summaryRanges([0]));
// Expected: ["0"]

// Test Case 5: One long continuous range
// Input: [1,2,3,4,5]
// Expected Output: ["1->5"]
console.log("Test 5 - [1,2,3,4,5]:", summaryRanges([1, 2, 3, 4, 5]));
// Expected: ["1->5"]

// Test Case 6: Negative numbers
// Input: [-2,-1,0,3,4]
// Expected Output: ["-2->0","3->4"]
console.log("Test 6 - [-2,-1,0,3,4]:", summaryRanges([-2, -1, 0, 3, 4]));
// Expected: ["-2->0","3->4"]

module.exports = summaryRanges;
