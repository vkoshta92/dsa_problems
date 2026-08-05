/*
|--------------------------------------------------------------------------
| Problem: Search in Rotated Sorted Array II
| Difficulty: Medium
| Companies: Amazon, Google, Microsoft, Apple, Bloomberg, Adobe
| LeetCode: #81
|--------------------------------------------------------------------------
|
| Problem Statement:
| There is an integer array nums sorted in non-decreasing order (not
| necessarily with distinct values).
|
| Before being passed to your function, nums is rotated at an unknown
| pivot index k (0 <= k < nums.length) such that the resulting array is
| [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
| (0-indexed).
|
| Given the array nums after the possible rotation and an integer target,
| return true if target is in nums, or false if it is not in nums.
|
| You must decrease the overall operation steps as much as possible.
|
| Example 1:
| Input: nums = [2, 5, 6, 0, 0, 1, 2], target = 0
| Output: true
|
| Example 2:
| Input: nums = [2, 5, 6, 0, 0, 1, 2], target = 3
| Output: false
|
| Example 3:
| Input: nums = [1, 0, 1, 1, 1], target = 0
| Output: true
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, yeh "Search in Rotated Sorted Array" ka duplicate version hai.
| Pehle wale mein saare elements distinct the, yahan duplicates ho sakte hain.
|
| Challenge of Duplicates:
| ------------------------
| Normal rotated binary search mein hum check karte hain ki left half sorted
| hai ya right half. Lekin agar duplicates hain, toh nums[left] == nums[mid]
| == nums[right] ho sakta hai, aur hum decide nahi kar paayenge ki kaun sa
| half sorted hai.
|
| Example: nums = [1, 0, 1, 1, 1], target = 0
|   left=0, right=4, mid=2
|   nums[left]=1, nums[mid]=1, nums[right]=1
|   Hum nahi bata sakte ki kaun sa half sorted hai!
|
| Solution: Tricky Case Handling
| ------------------------------
| 1. Normal rotated search jaisa logic:
|    - Agar nums[left] <= nums[mid], left half sorted hai
|      => Check karo target left half mein hai kya
|    - Agar nums[mid] <= nums[right], right half sorted hai
|      => Check karo target right half mein hai kya
|
| 2. DUPLICATE CASE: Agar nums[left] == nums[mid] == nums[right]:
|    - left++ aur right-- karo (edges se andar aao)
|    - Kyunki hum sure nahi hain ki target kis taraf hai,
|      isliye dono taraf se shrink karte hain
|
| 3. Continue binary search until left <= right
|
| Key Insight: Duplicate case mein O(log n) guarantee nahi rahti.
| Worst case O(n) ho sakta hai (jab saare elements same hon).
| Average case still O(log n).
|
| Dry Run: nums = [1, 0, 1, 1, 1], target = 0
|
| left=0, right=4, mid=2
|   nums[left]=1, nums[mid]=1, nums[right]=1 => all equal!
|   left=1, right=3
|
| left=1, right=3, mid=2
|   nums[left]=0, nums[mid]=1
|   nums[left] <= nums[mid] (0 <= 1) => left half sorted
|   target=0 is in [0, 1]? yes! right=mid-1=1
|
| left=1, right=1, mid=1
|   nums[1]=0 == target => return true ✓
|--------------------------------------------------------------------------
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        // Target mil gaya!
        if (nums[mid] === target) return true;

        // Tricky case: left, mid, right sab equal hain
        // Decide nahi kar sakte kaunsa half sorted hai
        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left++;
            right--;
            continue;
        }

        // Left half sorted hai
        if (nums[left] <= nums[mid]) {
            // Check karo target left sorted half mein hai kya
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // Left half mein dhundho
            } else {
                left = mid + 1; // Right half mein dhundho
            }
        }
        // Right half sorted hai
        else {
            // Check karo target right sorted half mein hai kya
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // Right half mein dhundho
            } else {
                right = mid - 1; // Left half mein dhundho
            }
        }
    }

    return false;
}

/*
|--------------------------------------------------------------------------
| Time Complexity:
| - Average: O(log n) - binary search jaisa hi hai
| - Worst: O(n) - jab saare elements duplicates hon aur left++ right--
|   karte karte linear scan ho jaye
|   Example: nums = [1,1,1,1,1,1,1], target = 2
|   Har iteration mein left++ aur right--, mid calculation redundant
|
| Space Complexity: O(1)
| - Sirf left, right, mid pointers use kar rahe hain
| - Koi extra data structure nahi
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Search in Rotated Sorted Array II ===");
console.log("");

// Test Case 1: Found with duplicates
console.log("Test 1: nums = [2,5,6,0,0,1,2], target = 0");
console.log("Expected: true");
console.log("Output:", search([2, 5, 6, 0, 0, 1, 2], 0));
console.log("");

// Test Case 2: Not found
console.log("Test 2: nums = [2,5,6,0,0,1,2], target = 3");
console.log("Expected: false");
console.log("Output:", search([2, 5, 6, 0, 0, 1, 2], 3));
console.log("");

// Test Case 3: Tricky duplicate case
console.log("Test 3: nums = [1,0,1,1,1], target = 0");
console.log("Expected: true");
console.log("Output:", search([1, 0, 1, 1, 1], 0));
console.log("");

// Test Case 4: All duplicates, target not present
console.log("Test 4: nums = [1,1,1,1,1,1,1], target = 2");
console.log("Expected: false");
console.log("Output:", search([1, 1, 1, 1, 1, 1, 1], 2));
console.log("");

module.exports = { search };
