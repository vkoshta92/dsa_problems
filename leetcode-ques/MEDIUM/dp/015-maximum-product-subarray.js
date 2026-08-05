/*
|--------------------------------------------------------------------------
| Problem: Maximum Product Subarray
| Difficulty: Medium
| Companies: Amazon, Google, Meta, Microsoft, Apple, LinkedIn, Uber
| LeetCode: #152
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given an integer array nums, find a subarray that has the largest product,
| and return the product.
|
| The test cases are generated so that the answer will fit in a 32-bit integer.
|
| Example 1:
| Input: nums = [2, 3, -2, 4]
| Output: 6
| Explanation: [2, 3] has the largest product 6.
|
| Example 2:
| Input: nums = [-2, 0, -1]
| Output: 0
| Explanation: The result cannot be 2, because [-2, -1] is not a subarray.
|
| Example 3:
| Input: nums = [-2, 3, -4]
| Output: 24
| Explanation: The entire array product is 24.
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, yeh "Maximum Subarray" (Kadane's Algorithm) ka cousin hai par
| product ke saath. Product mein negative number twist daal deta hai!
|
| Twist: Negative number se multiply karne par chhota number bada aur
| bada number chhota ho sakta hai!
|
| Approach: Track both max and min at each step
| ----------------------------------------------
| 1. Do variables rakho: currentMax aur currentMin
|    - currentMax = ith position tak khatam hone wala maximum product
|    - currentMin = ith position tak khatam hone wala minimum product
|
| 2. Har num ke liye:
|    - Agar num negative hai: max aur min swap karo! Kyunki:
|      max * (-ve) = very negative (naya min)
|      min * (-ve) = very positive (naya max)
|
|    - currentMax = max(num, currentMax * num)
|    - currentMin = min(num, currentMin * num)
|
|    - globalMax = max(globalMax, currentMax)
|
| 3. currentMax/currentMin mein sirf num lene ka option isliye hai kyunki
|    kabhi kabhi purana subarray chhod ke naye se start karna better hota
|    hai (jaise 0 aane par).
|
| Dry Run: nums = [2, 3, -2, 4]
|
|   i=0, num=2:
|     curMax = max(2, 1*2) = 2, curMin = min(2, 1*2) = 2
|     global = 2
|
|   i=1, num=3:
|     curMax = max(3, 2*3) = 6, curMin = min(3, 2*3) = 3
|     global = 6
|
|   i=2, num=-2:
|     num negative hai, swap! curMax=3, curMin=6
|     curMax = max(-2, 3*(-2)) = -2
|     curMin = min(-2, 6*(-2)) = -12
|     global = max(6, -2) = 6
|
|   i=3, num=4:
|     curMax = max(4, -2*4) = 4
|     curMin = min(4, -12*4) = -48
|     global = max(6, 4) = 6
|
|   Answer: 6
|
| Dry Run: nums = [-2, 3, -4]
|
|   i=0, num=-2: curMax=-2, curMin=-2, global=-2
|   i=1, num=3:  curMax=max(3,-2*3)=3, curMin=min(3,-2*3)=-6, global=3
|   i=2, num=-4: swap! curMax=-6, curMin=3
|                curMax=max(-4,-6*(-4))=24, curMin=min(-4,3*(-4))=-12
|                global = max(3, 24) = 24
|
|   Answer: 24 ✓
|--------------------------------------------------------------------------
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
    if (nums.length === 0) return 0;

    let currentMax = nums[0];
    let currentMin = nums[0];
    let globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        // Negative number: max aur min swap ho jayenge
        if (num < 0) {
            const temp = currentMax;
            currentMax = currentMin;
            currentMin = temp;
        }

        // Naya current max/min calculate karo
        // Option 1: pichle subarray se continue (current * num)
        // Option 2: naya subarray start (num alone)
        currentMax = Math.max(num, currentMax * num);
        currentMin = Math.min(num, currentMin * num);

        // Global update
        globalMax = Math.max(globalMax, currentMax);
    }

    return globalMax;
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n)
| - Array ko ek baar traverse karte hain
| - Har element ke liye O(1) operations
|
| Space Complexity: O(1)
| - Sirf teen variables: currentMax, currentMin, globalMax
| - Koi extra array nahi
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Maximum Product Subarray ===");
console.log("");

// Test Case 1: Standard case with interruption
console.log("Test 1: nums = [2, 3, -2, 4]");
console.log("Expected: 6 (subarray [2,3])");
console.log("Output:", maxProduct([2, 3, -2, 4]));
console.log("");

// Test Case 2: Zero resets product
console.log("Test 2: nums = [-2, 0, -1]");
console.log("Expected: 0");
console.log("Output:", maxProduct([-2, 0, -1]));
console.log("");

// Test Case 3: Two negatives make positive
console.log("Test 3: nums = [-2, 3, -4]");
console.log("Expected: 24 (entire array)");
console.log("Output:", maxProduct([-2, 3, -4]));
console.log("");

// Test Case 4: Single negative number
console.log("Test 4: nums = [-2]");
console.log("Expected: -2");
console.log("Output:", maxProduct([-2]));

module.exports = { maxProduct };
