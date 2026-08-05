/*
|--------------------------------------------------------------------------
| Problem: Merge Sorted Array
| Difficulty: Easy
| Companies: Amazon, Google, Meta, Microsoft, Apple, Bloomberg, Adobe
| LeetCode: #88
|--------------------------------------------------------------------------
|
| Problem Statement:
| You are given two integer arrays nums1 and nums2, sorted in non-decreasing
| order, and two integers m and n, representing the number of elements in
| nums1 and nums2 respectively.
|
| Merge nums1 and nums2 into a single array sorted in non-decreasing order.
|
| The final sorted array should not be returned by the function, but instead
| be stored inside the array nums1. To accommodate this, nums1 has a length
| of m + n, where the first m elements denote the elements that should be
| merged, and the last n elements are set to 0 and should be ignored.
| nums2 has a length of n.
|
| Example 1:
| Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
| Output: [1,2,2,3,5,6]
| Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
|
| Example 2:
| Input: nums1 = [1], m = 1, nums2 = [], n = 0
| Output: [1]
|
| Example 3:
| Input: nums1 = [0], m = 0, nums2 = [1], n = 1
| Output: [1]
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, do sorted arrays ko merge karna hai nums1 ke andar hi in-place.
| nums1 mein already m+n ki length hai, last n positions empty (0) hain.
|
| Approach: Fill from the End (Right to Left)
| -------------------------------------------
| 1. Teen pointers maintain karo:
|    - i = m - 1: nums1 ke valid elements ka last index
|    - j = n - 1: nums2 ke elements ka last index
|    - k = m + n - 1: nums1 mein fill karne ka last position
|
| 2. Peeche se comparison karte jao:
|    - Agar nums1[i] > nums2[j]: nums1[k] = nums1[i], i--, k--
|    - Agar nums1[i] <= nums2[j]: nums1[k] = nums2[j], j--, k--
|
| 3. Agar j >= 0 (nums2 ke elements bache hain):
|    - Baaki bache nums2 ke elements nums1 ke starting mein copy karo
|
| 4. Agar i >= 0 (nums1 ke elements bache hain):
|    - Kuch mat karo, kyunki wo already apni sahi jagah pe hain!
|
| Key Insight: Peeche se fill karna isliye kaam karta hai kyunki nums1
| ke end mein empty positions hain. Agar aage se start karte toh elements
| overwrite ho jaate. Peeche se karte hain toh koi data loss nahi.
|
| Dry Run: nums1 = [1,2,3,0,0,0], m=3, nums2 = [2,5,6], n=3
|
| i=2 (value=3), j=2 (value=6), k=5
|   3 < 6: nums1[5] = 6, j=1, k=4 => [1,2,3,0,0,6]
|
| i=2 (value=3), j=1 (value=5), k=4
|   3 < 5: nums1[4] = 5, j=0, k=3 => [1,2,3,0,5,6]
|
| i=2 (value=3), j=0 (value=2), k=3
|   3 > 2: nums1[3] = 3, i=1, k=2 => [1,2,3,3,5,6]
|
| i=1 (value=2), j=0 (value=2), k=2
|   2 <= 2: nums1[2] = 2, j=-1, k=1 => [1,2,2,3,5,6]
|
| j < 0, loop end. Result: [1,2,2,3,5,6] ✓
|--------------------------------------------------------------------------
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    // Three pointers: i for nums1, j for nums2, k for insertion position
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    // Peeche se compare karte hue fill karo
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // Agar nums2 ke elements bache hain, unhe copy karo
    // nums1 ke elements agar bache hain to wo already place pe hain
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(m + n)
| - Har element exactly ek baar process hota hai
| - Dono arrays ke elements ko ek baar hi access karte hain
|
| Space Complexity: O(1)
| - In-place merge, koi extra array nahi
| - Sirf teen pointer variables
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Merge Sorted Array ===");
console.log("");

// Test Case 1: Standard case
const nums1a = [1, 2, 3, 0, 0, 0];
merge(nums1a, 3, [2, 5, 6], 3);
console.log("Test 1: nums1 = [1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3");
console.log("Expected: [1,2,2,3,5,6]");
console.log("Output:", nums1a);
console.log("");

// Test Case 2: nums2 is empty
const nums1b = [1];
merge(nums1b, 1, [], 0);
console.log("Test 2: nums1 = [1], m=1, nums2=[], n=0");
console.log("Expected: [1]");
console.log("Output:", nums1b);
console.log("");

// Test Case 3: nums1 is empty (m=0)
const nums1c = [0];
merge(nums1c, 0, [1], 1);
console.log("Test 3: nums1 = [0], m=0, nums2=[1], n=1");
console.log("Expected: [1]");
console.log("Output:", nums1c);
console.log("");

// Test Case 4: All nums2 elements are smaller
const nums1d = [4, 5, 6, 0, 0, 0];
merge(nums1d, 3, [1, 2, 3], 3);
console.log("Test 4: nums1 = [4,5,6,0,0,0], m=3, nums2=[1,2,3], n=3");
console.log("Expected: [1,2,3,4,5,6]");
console.log("Output:", nums1d);

module.exports = { merge };
