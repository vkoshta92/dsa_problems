/*
==========================================================================
Problem Name: Median of Two Sorted Arrays
Difficulty: Hard
Companies: Google, Amazon, Microsoft, Facebook, Apple, Goldman Sachs
==========================================================================

Problem Statement:
Given two sorted arrays nums1 and nums2 of size m and n respectively,
return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2+3)/2 = 2.5.
==========================================================================
*/

/*
==============================================
  Hinglish Logic Explanation (Binary Search on Partition)
==============================================

Dekho bhai, yeh problem Hard hai lekin approach samajh aayi toh easy hai.

KEY IDEA: Binary Search on the smaller array's partition.

Step 1: Ensure nums1 chhoti array hai
- Agar nums1 bada hai toh swap karo. Humme chhoti array pe binary search karna hai.

Step 2: Partition concept
- Total length = m + n
- Left half mein (m+n+1)/2 elements hone chahiye (odd length ke liye +1 extra)
- nums1 se i elements lo, nums2 se j = half - i elements lo
- i = nums1 mein partition point (0 se m tak)
- j = nums2 mein partition point

Step 3: Binary Search on i (partition in nums1)
- low = 0, high = m (nums1 se kitne elements left mein aayenge)
- Har step mein:
  i = (low + high) / 2
  j = half - i

Step 4: Check partition validity
- leftMax1 = (i > 0) ? nums1[i-1] : -Infinity  (nums1 ka left max)
- rightMin1 = (i < m) ? nums1[i] : Infinity      (nums1 ka right min)
- leftMax2 = (j > 0) ? nums2[j-1] : -Infinity   (nums2 ka left max)
- rightMin2 = (j < n) ? nums2[j] : Infinity       (nums2 ka right min)

Correct partition:
  leftMax1 <= rightMin2 AND leftMax2 <= rightMin1

Step 5: Agar partition correct hai:
- Odd total: median = max(leftMax1, leftMax2)
- Even total: median = (max(leftMax1, leftMax2) + min(rightMin1, rightMin2)) / 2

Step 6: Agar leftMax1 > rightMin2:
  -> i kam karo (high = i - 1) - nums1 se zyada elements left mein aa gaye
Agar leftMax2 > rightMin1:
  -> i badhao (low = i + 1) - nums1 se kam elements chahiye

Visual Example: nums1 = [1,3], nums2 = [2]
- m=2, n=1, total=3, half=2
- i=1, j=1 -> leftMax1=1, rightMin1=3, leftMax2=2, rightMin2=Infinity
- 1<=Inf AND 2<=3 -> Correct!
- median = max(1,2) = 2

Visual Example: nums1 = [1,2], nums2 = [3,4]
- m=2, n=2, total=4, half=2
- i=1, j=1 -> leftMax1=1, rightMin1=2, leftMax2=3, rightMin2=4
- 1<=4 AND 3<=2 -> NOT correct! leftMax2 > rightMin1 -> low=i+1=2
- i=2, j=0 -> leftMax1=2, rightMin1=Inf, leftMax2=-Inf, rightMin2=3
- 2<=3 AND -Inf<=Inf -> Correct!
- median = (max(2,-Inf) + min(Inf,3)) / 2 = (2+3)/2 = 2.5

Time Complexity: O(log(min(m, n)))
Space Complexity: O(1)
==============================================
*/

function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 chhoti array hai
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    const half = Math.floor((m + n + 1) / 2);

    let low = 0;
    let high = m;

    while (low <= high) {
        const i = Math.floor((low + high) / 2); // partition in nums1
        const j = half - i;                      // partition in nums2

        // Edge cases ke liye Infinity/-Infinity use karo
        const leftMax1 = i > 0 ? nums1[i - 1] : -Infinity;
        const rightMin1 = i < m ? nums1[i] : Infinity;
        const leftMax2 = j > 0 ? nums2[j - 1] : -Infinity;
        const rightMin2 = j < n ? nums2[j] : Infinity;

        if (leftMax1 <= rightMin2 && leftMax2 <= rightMin1) {
            // Correct partition mil gayi!
            if ((m + n) % 2 === 1) {
                // Odd total elements
                return Math.max(leftMax1, leftMax2);
            } else {
                // Even total elements
                return (
                    (Math.max(leftMax1, leftMax2) +
                        Math.min(rightMin1, rightMin2)) /
                    2
                );
            }
        } else if (leftMax1 > rightMin2) {
            // nums1 se zyada elements left mein, i kam karo
            high = i - 1;
        } else {
            // nums1 se kam elements chahiye, i badhao
            low = i + 1;
        }
    }
}

/*
==============================================
  Time Complexity: O(log(min(m, n)))
  - Binary search chhoti array pe hoti hai.

  Space Complexity: O(1)
  - Sirf kuch variables use ho rahe hain, koi extra array nahi.
==============================================
*/

// ===================== TEST CASES =====================

// Test Case 1: Odd total length
// Input: nums1 = [1,3], nums2 = [2]
// Expected Output: 2.0
console.log("Test 1:", findMedianSortedArrays([1, 3], [2])); // 2

// Test Case 2: Even total length
// Input: nums1 = [1,2], nums2 = [3,4]
// Expected Output: 2.5
console.log("Test 2:", findMedianSortedArrays([1, 2], [3, 4])); // 2.5

// Test Case 3: One empty array
// Input: nums1 = [], nums2 = [1]
// Expected Output: 1
console.log("Test 3:", findMedianSortedArrays([], [1])); // 1

// Test Case 4: Both single element
// Input: nums1 = [2], nums2 = [1]
// Expected Output: 1.5
console.log("Test 4:", findMedianSortedArrays([2], [1])); // 1.5

// Test Case 5: Larger arrays
// Input: nums1 = [1,3,5,7], nums2 = [2,4,6,8]
// Expected Output: 4.5
console.log("Test 5:", findMedianSortedArrays([1, 3, 5, 7], [2, 4, 6, 8])); // 4.5

// Test Case 6: nums1 is larger (will be swapped internally)
// Input: nums1 = [1,2,3,4,5], nums2 = [6,7,8]
// Merged: [1,2,3,4,5,6,7,8] -> median = (4+5)/2 = 4.5
console.log("Test 6:", findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7, 8])); // 4.5

module.exports = findMedianSortedArrays;
