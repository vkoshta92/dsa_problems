/*
==========================================================================
Problem Name: Find Minimum in Rotated Sorted Array
Difficulty: Medium
Companies: Amazon, Google, Microsoft, Facebook, Apple
==========================================================================

Problem Statement:
Suppose an array of length n sorted in ascending order is rotated between
1 and n times. Given the sorted rotated array nums of unique elements,
return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] rotated 0 times.
==========================================================================
*/

/*
==============================================
  Hinglish Logic Explanation (Binary Search)
==============================================

Dekho bhai, sorted array rotated hai. Humme minimum element dhundhna hai.

Key Observation:
- Agar array sorted hai (rotated 0 baar), toh nums[0] minimum hai.
- Rotated array mein do sorted parts hote hain:
  [4, 5, 6, 7, 0, 1, 2]
   --------    --------
   Left part    Right part
- Minimum element woh hai jiske baad array ka pattern tootta hai.
- Yaani: nums[mid] > nums[right] -> minimum right side mein hai (mid ke baad).
- Agar nums[mid] <= nums[right] -> minimum left side mein hai (mid ya uske pehle).

Step-by-step Approach:
1. low = 0, high = length - 1
2. Jab tak low < high:
   a. mid = low + (high - low) / 2
   b. Agar nums[mid] > nums[right]:
      -> Minimum right half mein hai, low = mid + 1
   c. Agar nums[mid] <= nums[right]:
      -> Minimum left half mein hai (ya mid khud), high = mid
3. Loop ke baad, low == high == minimum element ka index.

Example walkthrough: nums = [4, 5, 6, 7, 0, 1, 2]
- low=0, high=6, mid=3 -> nums[3]=7 > nums[6]=2 -> low=4
- low=4, high=6, mid=5 -> nums[5]=1 <= nums[6]=2 -> high=5
- low=4, high=5, mid=4 -> nums[4]=0 <= nums[5]=1 -> high=4
- low=4, high=4 -> loop stops, nums[4]=0 -> minimum!

Time Complexity: O(log n) - Binary search lag raha hai.
Space Complexity: O(1) - Constant space.
==============================================
*/

function findMin(nums) {
    if (nums.length === 1) return nums[0];

    let low = 0;
    let high = nums.length - 1;

    // Agar array already sorted hai (no rotation)
    if (nums[low] < nums[high]) {
        return nums[low];
    }

    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2);

        if (nums[mid] > nums[high]) {
            // Minimum mid ke right side mein hai
            low = mid + 1;
        } else {
            // Minimum mid ke left side mein hai ya mid khud hai
            high = mid;
        }
    }

    return nums[low];
}

/*
==============================================
  Time Complexity: O(log n)
  - Binary search har iteration mein search space half karta hai.

  Space Complexity: O(1)
  - Sirf low, high, mid variables use ho rahe hain.
==============================================
*/

// ===================== TEST CASES =====================

// Test Case 1: Rotated array
// Input: nums = [3,4,5,1,2]
// Expected Output: 1
console.log("Test 1:", findMin([3, 4, 5, 1, 2])); // 1

// Test Case 2: Larger rotated array
// Input: nums = [4,5,6,7,0,1,2]
// Expected Output: 0
console.log("Test 2:", findMin([4, 5, 6, 7, 0, 1, 2])); // 0

// Test Case 3: No rotation (already sorted)
// Input: nums = [11,13,15,17]
// Expected Output: 11
console.log("Test 3:", findMin([11, 13, 15, 17])); // 11

// Test Case 4: Two elements
// Input: nums = [2,1]
// Expected Output: 1
console.log("Test 4:", findMin([2, 1])); // 1

// Test Case 5: Single element
// Input: nums = [5]
// Expected Output: 5
console.log("Test 5:", findMin([5])); // 5

module.exports = findMin;
