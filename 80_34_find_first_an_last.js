/**
 * ============================================================================
 * PROBLEM: Find First and Last Position of Element in Sorted Array
 * ============================================================================
 * Ek sorted array diya hai, hume target element ka starting aur ending index find karna hai.
 * Agar target nahi mile → [-1, -1] return karna hai.
 * 
 * ============================================================================
 * APPROACH: Binary Search (2 times)
 * ============================================================================
 * Logic:
 * 1. First Binary Search → starting index find karne ke liye
 *    - Leftmost occurrence nikalte hain
 * 2. Second Binary Search → ending index find karne ke liye
 *    - Rightmost occurrence nikalte hain
 * 
 * Why this works:
 * - Array sorted hai → binary search apply kar sakte hain
 * - Lower bound (first position) aur upper bound (last position) alag-alag milte hain
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(log n)
 * - Do binary search chal rahe hain → O(log n) + O(log n) = O(log n)
 * 
 * SPACE COMPLEXITY: O(1)
 * - Extra space use nahi ho raha (sirf variables)
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
    while (l < r) { // strdting index
        let m = l + Math.floor((r - l) / 2);

        if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    if (nums[l] === target) { // kyoki target l ke babar nhi hua to check kr liay ah
        ans[0] = l;
    }

    // 🔹 RESET POINTERS
    l = 0;
    r = nums.length - 1;

    // 🔹 SECOND BINARY SEARCH → ending index
    while (l < r) { // for ending endex
        let m = l + Math.ceil((r - l) / 2);

        if (nums[m] > target) {
            r = m - 1;
        } else {
            l = m; // dafe on left side bababad bhi ho skta h
        }
    }

    if (nums[r] === target) {
        ans[1] = r;
    }
    // if (nums[l] === target) { // ye bhi kr skte h
    //     ans[1] = l;
    // }

    return ans;

    // ab left anad r same h jenge to ibfinte llop me aa jeg
    // deadlock kyoki always middle left ayaega (isliye ceil use kiya hai second case me)
};