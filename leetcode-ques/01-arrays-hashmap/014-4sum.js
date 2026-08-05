/*
|--------------------------------------------------------------------------
| Problem: 4Sum
| Difficulty: Medium
| Companies: Amazon, Google, Meta, Apple, Microsoft, Bloomberg, Adobe
| LeetCode: #18
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given an array nums of n integers, return an array of all the unique
| quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
|   - 0 <= a, b, c, d < n
|   - a, b, c, and d are distinct
|   - nums[a] + nums[b] + nums[c] + nums[d] == target
|
| You may return the answer in any order.
|
| Example 1:
| Input: nums = [1, 0, -1, 0, -2, 2], target = 0
| Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
|
| Example 2:
| Input: nums = [2, 2, 2, 2, 2], target = 8
| Output: [[2, 2, 2, 2]]
|
| Example 3:
| Input: nums = [-2, -1, -1, 1, 1, 2, 2], target = 0
| Output: [[-2, -1, 1, 2], [-1, -1, 1, 1]]
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, ye 3Sum ka extension hai. Ab hume chaar numbers dhundhne hain
| jinka sum target ke barabar ho.
|
| Approach: Sort + Fix First Two + Two Pointers
| --------------------------------------------
| 1. Pehle array ko sort kar do - O(n log n). Isse duplicates skip karna
|    easy ho jata hai aur two-pointer approach kaam karti hai.
|
| 2. Do nested loops lagao pehle do elements fix karne ke liye:
|    - i = 0 se n-4 tak (pehla element)
|    - j = i+1 se n-3 tak (doosra element)
|
| 3. Baaki do elements ke liye two-pointer lagao:
|    - left = j + 1
|    - right = n - 1
|    - sum = nums[i] + nums[j] + nums[left] + nums[right]
|    - sum < target: left++ (badha number chahiye)
|    - sum > target: right-- (chhota number chahiye)
|    - sum == target: quadruplet mil gaya!
|
| 4. Duplicates skip karna bohot important hai, warna TLE lag jayega:
|    - Agar nums[i] == nums[i-1], i skip karo
|    - Agar nums[j] == nums[j-1] aur j > i+1, j skip karo
|    - Jab quadruplet mil jaye, left aur right ke duplicates skip karo
|
| 5. Edge Cases:
|    - Array length < 4: return empty
|    - Early break: agar smallest possible sum > target, break
|    - Early continue: agar largest possible sum < target, continue
|
| Key Insight: Sorting se duplicate handling easy ho jati hai.
| Four levels pe duplicate skipping karni hai: i, j, left, right.
|
| Dry Run: nums = [1, 0, -1, 0, -2, 2], target = 0
| Sorted: [-2, -1, 0, 0, 1, 2]
|
| i=0 (-2), j=1 (-1): left=2, right=5
|   sum = -2 + (-1) + 0 + 2 = -1 < 0, left++
|   sum = -2 + (-1) + 0 + 2 = -1 < 0, left++
|   sum = -2 + (-1) + 1 + 2 = 0! Found [-2,-1,1,2]
| i=0 (-2), j=2 (0): left=3, right=5
|   sum = -2 + 0 + 0 + 2 = 0! Found [-2,0,0,2]
|   left++, right--, left=4,right=3 stop
| i=0 (-2), j=3 (0): skip (duplicate of j=2)
| i=1 (-1), j=2 (0): left=3, right=5
|   sum = -1 + 0 + 0 + 2 = 1 > 0, right--
|   sum = -1 + 0 + 0 + 1 = 0! Found [-1,0,0,1]
| Answer: [[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]]
|--------------------------------------------------------------------------
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    const n = nums.length;
    const result = [];

    if (n < 4) return result;

    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Step 2: Fix first element i
    for (let i = 0; i < n - 3; i++) {
        // Skip duplicate for i
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Early break: smallest possible sum with i > target
        // nums[i] + nums[i+1] + nums[i+2] + nums[i+3] is the smallest for this i
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;

        // Early continue: largest possible sum with i < target
        // nums[i] + nums[n-3] + nums[n-2] + nums[n-1] is the largest for this i
        if (nums[i] + nums[n - 3] + nums[n - 2] + nums[n - 1] < target) continue;

        // Step 3: Fix second element j
        for (let j = i + 1; j < n - 2; j++) {
            // Skip duplicate for j
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            // Early break for j
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;

            // Early continue for j
            if (nums[i] + nums[j] + nums[n - 2] + nums[n - 1] < target) continue;

            // Step 4: Two pointers for remaining two elements
            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    // Skip duplicate for left
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicate for right
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n³)
| - Sorting: O(n log n)
| - Outer loop i: O(n)
| - Inner loop j: O(n)
| - Two pointer: O(n)
| - Overall: O(n³) dominates
|
| Space Complexity: O(1) (result array ko count nahi karte)
| - Sorting in-place ya O(n) depending on sort implementation
| - Sirf kuch pointer variables use ho rahe hain
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== 4Sum ===");
console.log("");

// Test Case 1: Standard example
console.log("Test 1: nums = [1, 0, -1, 0, -2, 2], target = 0");
console.log("Expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]");
console.log("Output:", fourSum([1, 0, -1, 0, -2, 2], 0));
console.log("");

// Test Case 2: All same elements
console.log("Test 2: nums = [2, 2, 2, 2, 2], target = 8");
console.log("Expected: [[2,2,2,2]]");
console.log("Output:", fourSum([2, 2, 2, 2, 2], 8));
console.log("");

// Test Case 3: Multiple solutions
console.log("Test 3: nums = [-2, -1, -1, 1, 1, 2, 2], target = 0");
console.log("Expected: [[-2,-1,1,2],[-1,-1,1,1]]");
console.log("Output:", fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
console.log("");

// Test Case 4: No solution
console.log("Test 4: nums = [1, 2, 3, 4], target = 20");
console.log("Expected: []");
console.log("Output:", fourSum([1, 2, 3, 4], 20));
console.log("");

module.exports = { fourSum };
