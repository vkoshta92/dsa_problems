/**
 * ============================================================================
 * PROBLEM: Find Minimum in Rotated Sorted Array
 * ============================================================================
 * Sorted array rotate ho gaya hai, minimum element find karna hai.
 * 
 * ============================================================================
 * APPROACH: Binary Search
 * ============================================================================
 * Logic:
 * 1. Mid element find karo
 * 2. Compare mid with right
 * 3. Agar mid > right → min right side me hai
 * 4. Else → min left side me hai (including mid)
 * 
 * Why this works:
 * - Rotated array me ek hi break point hota hai
 * - Uske base pe half eliminate kar sakte hain
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(log n)
 * - Har step me half array remove ho raha hai
 * 
 * SPACE COMPLEXITY: O(1)
 * - Extra space use nahi ho raha
 * ============================================================================
 */
// another approach
// var findMin = function(nums) {
//     let l = 0;
//     let r = nums.length - 1;

//     while (l < r) {
//         let m = Math.floor((l + r) / 2);

//         if (nums[m] > nums[r]) {
//             // min right side me hai
//             l = m + 1;
//         } else {
//             // min left side me hai (including m)
//             r = m;
//         }
//     }

//     return nums[l];
// };


/**
 * ============================================================================
 * PROBLEM: Find Minimum in Rotated Sorted Array
 * ============================================================================
 * Rotated sorted array me minimum (inflection point) find karna hai.
 * 
 * ============================================================================
 * APPROACH: Binary Search (Inflection Point Detection)
 * ============================================================================
 * Logic:
 * 1. Agar pura array sorted hai → first element hi minimum
 * 2. Mid nikaalo
 * 3. Check karo mid inflection point hai ya nahi
 * 4. Decide karo left jana hai ya right
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(log n)
 * SPACE COMPLEXITY: O(1)
 * ============================================================================
 */

var findMins = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    console.log("🚀 Initial Array:", nums);

    while (l <= r) {

        console.log("\n---------------------------");
        console.log("Current Range:");
        console.log("l:", l, "nums[l]:", nums[l]);
        console.log("r:", r, "nums[r]:", nums[r]);
 // for is all array is sorted hr case me jb bhi  sorted mile ye condition chl jae , kao bar  right sorted mil gyi to bhi ye condition while ke anddr h check krti rhegi 
        // ✅ Case 1: Array already sorted
        if (nums[l] <= nums[r]) {
            console.log("✅ Array sorted → Minimum =", nums[l]);
            return nums[l];
        }

        let m = l + Math.floor((r - l) / 2);

        console.log("Mid:");
        console.log("m:", m, "nums[m]:", nums[m]);
 // edge case  mid is inflection point jha se rotate ho rhi h array
        // ✅ Case 2: Inflection point (IMPORTANT FIX: m > 0)
        if (m > 0 && nums[m - 1] > nums[m]) {
            console.log("🔥 Inflection point found at m =", m);
            console.log("✅ Minimum =", nums[m]);
            return nums[m];
        }

        // ❗ Decide direction
        
     // if left array not sorted
    // 1. array left half part not sorted
        if (nums[l] > nums[m]) {
            console.log("👉 Left part unsorted → go LEFT");
            r = m - 1;
        } else {
            console.log("👉 Left part sorted → go RIGHT");
            l = m + 1;
        }
    }

    console.log("⚠️ Fallback return:", nums[l]);
    return nums[l];
};


// 🔥 Test
findMins([4,5,6,7,0,1,2]);