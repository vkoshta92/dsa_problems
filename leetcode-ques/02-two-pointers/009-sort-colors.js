/*
|--------------------------------------------------------------------------
| Problem: Sort Colors (Dutch National Flag Problem)
| Difficulty: Medium
| Companies: Amazon, Google, Meta, Microsoft, Apple, Bloomberg, Adobe
| LeetCode: #75
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given an array nums with n objects colored red, white, or blue, sort them
| in-place so that objects of the same color are adjacent, with the colors
| in the order red, white, and blue.
|
| We will use the integers 0, 1, and 2 to represent the color red, white,
| and blue, respectively.
|
| You must solve this problem without using the library's sort function.
|
| Example 1:
| Input: nums = [2, 0, 2, 1, 1, 0]
| Output: [0, 0, 1, 1, 2, 2]
|
| Example 2:
| Input: nums = [2, 0, 1]
| Output: [0, 1, 2]
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, yeh classic "Dutch National Flag" problem hai jo Edsger Dijkstra
| ne diya tha. Humein sirf teen colors (0, 1, 2) sort karne hain in-place
| aur ek pass (single pass) mein.
|
| Approach: Three Pointers
| ------------------------
| 1. Teen pointers maintain karo:
|    - low: 0s rakhne ki boundary (0 se low-1 tak saare 0s)
|    - mid: current element jo process ho raha hai
|    - high: 2s rakhne ki boundary (high+1 se n-1 tak saare 2s)
|
| 2. Algorithm:
|    - low = 0, mid = 0, high = nums.length - 1
|    - Jab tak mid <= high, tab tak:
|
|    a) Agar nums[mid] == 0:
|       - swap(nums[low], nums[mid])
|       - low++, mid++ (kyunki low wali jagah 0 aa gaya)
|
|    b) Agar nums[mid] == 1:
|       - Kuch mat karo, bas mid++ (1 apni sahi jagah pe hai)
|
|    c) Agar nums[mid] == 2:
|       - swap(nums[mid], nums[high])
|       - high-- (mid++ mat karo kyunki swapped element ko bhi check karna hai)
|
| 3. Loop khatam hone ke baad:
|    - 0 se low-1: saare 0
|    - low se high: saare 1 (mid bhi yahi hoga)
|    - high+1 se n-1: saare 2
|
| Key Insight: 0s left mein bhejo, 2s right mein, 1s automatically beech mein.
| Mid pointer current element track karta hai aur teeno regions maintain karta hai.
|
| Dry Run: nums = [2, 0, 2, 1, 1, 0]
|
| low=0, mid=0, high=5
|   nums[0]=2: swap(0,5) => [0,0,2,1,1,2], high=4
|
| low=0, mid=0, high=4
|   nums[0]=0: swap(0,0) => [0,0,2,1,1,2], low=1,mid=1
|
| low=1, mid=1, high=4
|   nums[1]=0: swap(1,1) => [0,0,2,1,1,2], low=2,mid=2
|
| low=2, mid=2, high=4
|   nums[2]=2: swap(2,4) => [0,0,1,1,2,2], high=3
|
| low=2, mid=2, high=3
|   nums[2]=1: mid=3
|
| low=2, mid=3, high=3
|   nums[3]=1: mid=4
|
| low=2, mid=4, high=3 => mid>high, loop end
|
| Result: [0,0,1,1,2,2] ✓
|--------------------------------------------------------------------------
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // 0 ko left boundary pe bhejo
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // 1 apni sahi jagah pe hai, aage badho
            mid++;
        } else {
            // nums[mid] === 2
            // 2 ko right boundary pe bhejo
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
            // mid++ mat karo, swapped element ko bhi check karna hai
        }
    }
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n)
| - Array ko ek baar traverse karte hain
| - Har element maximum ek baar swap hota hai
| - Single pass algorithm
|
| Space Complexity: O(1)
| - In-place sorting, koi extra array nahi
| - Sirf teen pointer variables
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Sort Colors ===");
console.log("");

// Test Case 1: Standard case
const nums1 = [2, 0, 2, 1, 1, 0];
console.log("Test 1: nums = [2, 0, 2, 1, 1, 0]");
console.log("Expected: [0, 0, 1, 1, 2, 2]");
sortColors(nums1);
console.log("Output:", nums1);
console.log("");

// Test Case 2: Already sorted
const nums2 = [0, 1, 2];
console.log("Test 2: nums = [0, 1, 2]");
console.log("Expected: [0, 1, 2]");
sortColors(nums2);
console.log("Output:", nums2);
console.log("");

// Test Case 3: Reverse sorted
const nums3 = [2, 1, 0];
console.log("Test 3: nums = [2, 1, 0]");
console.log("Expected: [0, 1, 2]");
sortColors(nums3);
console.log("Output:", nums3);
console.log("");

// Test Case 4: Only 0s and 1s
const nums4 = [1, 0, 1, 0, 1, 0];
console.log("Test 4: nums = [1, 0, 1, 0, 1, 0]");
console.log("Expected: [0, 0, 0, 1, 1, 1]");
sortColors(nums4);
console.log("Output:", nums4);

module.exports = { sortColors };
