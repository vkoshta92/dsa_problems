/**
 * ============================================================================
 * PROBLEM: Find First and Last Position of Element in Sorted Array
 * ============================================================================
 * Ek sorted array diya hai, hume target element ka starting aur ending index find karna hai.
 * Agar target nahi mile → [-1, -1] return karna hai.
 * 
 * ============================================================================
 * APPROACH: Binary Search (Modified - Track Answer)
 * ============================================================================
 * Logic:
 * 1. First Binary Search → starting index (first occurrence)
 *    - Jab target mile → store karo aur LEFT search karo (r = m-1)
 * 
 * 2. Second Binary Search → ending index (last occurrence)
 *    - Jab target mile → store karo aur RIGHT search karo (l = m+1)
 * 
 * Why this works:
 * - Array sorted hai → binary search apply hota hai
 * - Target milne ke baad bhi search continue karte hain boundary ke liye
 * - First occurrence ke liye left side explore karte hain
 * - Last occurrence ke liye right side explore karte hain
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(log n)
 * - 2 binary searches → O(log n)
 * 
 * SPACE COMPLEXITY: O(1)
 * - Constant extra space
 * ============================================================================
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    let l = 0;
    let r = nums.length - 1;
    let ans = [-1, -1];

    // 🔹 FIRST BINARY SEARCH → starting index
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (target === nums[m]) {
            ans[0] = m;
            r = m - 1; // aur left me check karo (first occurrence ke liye)
        }
        else if (target > nums[m]) {
            l = m + 1;
        }
        else {
            r = m - 1;
        }
    }

    // 🔹 RESET POINTERS
    l = 0;
    r = nums.length - 1;

    // 🔹 SECOND BINARY SEARCH → ending index
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (target === nums[m]) {
            ans[1] = m;
            l = m + 1; // aur right me check karo (last occurrence ke liye)
        }
        else if (target > nums[m]) {
            l = m + 1;
        }
        else {
            r = m - 1;
        }
    }

    return ans;
};