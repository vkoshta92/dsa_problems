/*
====================================================================
Problem: Remove Duplicates from Sorted Array
Difficulty: Easy
Companies: Amazon, Microsoft, Facebook, Apple, Bloomberg
====================================================================

Given an integer array nums sorted in non-decreasing order,
remove the duplicates in-place such that each unique element
appears only once. The relative order of the elements should
be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k.
To get accepted, you need to do the following:
- Change the array nums such that the first k elements of nums
  contain the unique elements in the order they were present in nums.
- The remaining elements beyond k do not matter.
- Return k.

Note: You must modify the input array in-place.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two
             elements of nums being 1 and 2.

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_]
Explanation: Your function should return k = 5, with the first five
             elements of nums being 0, 1, 2, 3, and 4.

Example 3:
Input: nums = [1]
Output: 1, nums = [1]

Example 4:
Input: nums = [1,2,3]
Output: 3, nums = [1,2,3]
====================================================================
*/

/*
====================================================================
Hinglish Logic Explanation (Slow-Fast Pointer Approach):
====================================================================

Bhai, yeh problem sorted array mein hai, toh duplicate paas mein honge.
Hum do pointers use karenge -- slow aur fast.

Slow pointer: Yeh mark karta hai ki unique elements kitne aa gaye hain.
              Yeh sirf tab move hota hai jab naya unique element milta hai.
Fast pointer: Yeh poora array scan karta hai ek ek element pe.

Algorithm:
1. Agar array khali hai ya ek element hai, toh seedha return karo.
2. Slow pointer = 0 (pehla element hamesha unique hai)
3. Fast pointer = 1 se start karo (dusra element se compare karenge)
4. Har step pe:
   - Agar nums[fast] !== nums[slow] (naya unique mila):
     - Slow ko aage badhao: slow++
     - Us jagah pe naya unique element daalo: nums[slow] = nums[fast]
   - Agar same hai, toh sirf fast aage badhao
5. Final answer = slow + 1 (kyunki 0-indexed hai)

Example walkthrough: [0,0,1,1,1,2,2,3,3,4]
- slow=0, fast=1: nums[0]==nums[1] (0==0) → fast++
- slow=0, fast=2: nums[0]!=nums[2] (0!=1) → slow=1, nums[1]=1
- slow=1, fast=3: nums[1]==nums[3] (1==1) → fast++
- slow=1, fast=4: nums[1]==nums[4] (1==1) → fast++
- slow=1, fast=5: nums[1]!=nums[5] (1!=2) → slow=2, nums[2]=2
- ... aur chalte jaao

Result: [0,1,2,3,4,_,_,_,_,_] → k = 5
====================================================================
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;

    let slow = 0;

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1;
}

/*
====================================================================
Time Complexity: O(n)
- Fast pointer poora array ek baar traverse karta hai
- n = array ki length

Space Complexity: O(1)
- In-place modification ho rahi hai
- Sirf do pointer variables use ho rahe hain
- Koi extra space nahi lagega
====================================================================
*/

// ======================== TEST CASES ========================

// Test Case 1: Standard example
console.log("Test 1: [1,1,2]");
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log("Expected Output: k = 2, nums = [1,2]");
console.log("Actual Output: k = " + k1 + ", nums = [" + nums1.slice(0, k1).join(",") + "]");
console.log("---");

// Test Case 2: Multiple duplicates
console.log("Test 2: [0,0,1,1,1,2,2,3,3,4]");
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log("Expected Output: k = 5, nums = [0,1,2,3,4]");
console.log("Actual Output: k = " + k2 + ", nums = [" + nums2.slice(0, k2).join(",") + "]");
console.log("---");

// Test Case 3: Single element
console.log("Test 3: [1]");
let nums3 = [1];
let k3 = removeDuplicates(nums3);
console.log("Expected Output: k = 1, nums = [1]");
console.log("Actual Output: k = " + k3 + ", nums = [" + nums3.slice(0, k3).join(",") + "]");
console.log("---");

// Test Case 4: No duplicates
console.log("Test 4: [1,2,3]");
let nums4 = [1, 2, 3];
let k4 = removeDuplicates(nums4);
console.log("Expected Output: k = 3, nums = [1,2,3]");
console.log("Actual Output: k = " + k4 + ", nums = [" + nums4.slice(0, k4).join(",") + "]");
console.log("---");

// Test Case 5: All same elements
console.log("Test 5: [2,2,2,2]");
let nums5 = [2, 2, 2, 2];
let k5 = removeDuplicates(nums5);
console.log("Expected Output: k = 1, nums = [2]");
console.log("Actual Output: k = " + k5 + ", nums = [" + nums5.slice(0, k5).join(",") + "]");
console.log("---");

// Test Case 6: Empty array
console.log("Test 6: []");
let nums6 = [];
let k6 = removeDuplicates(nums6);
console.log("Expected Output: k = 0, nums = []");
console.log("Actual Output: k = " + k6 + ", nums = [" + nums6.slice(0, k6).join(",") + "]");
console.log("---");

module.exports = { removeDuplicates };
