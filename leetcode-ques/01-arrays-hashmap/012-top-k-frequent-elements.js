/*
==========================================================================
Problem: Top K Frequent Elements
Difficulty: Medium
Companies: Amazon, Google, Meta, Microsoft, Apple, Bloomberg
==========================================================================

Problem Statement:
Given an integer array nums and an integer k, return the k most frequent 
elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Example 3:
Input: nums = [1,2,1,2,1,2,3,3], k = 2
Output: [1,2]

Constraints:
- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4
- k is in the range [1, the number of unique elements in the array].
- It is guaranteed that the answer is unique.
==========================================================================
*/

/*
==========================================================================
Hinglish Logic Explanation:
==========================================================================

Bhai, yeh problem mein hume k most frequent elements nikalne hain.
Naive approach sort karega O(n log n), but hum Bucket Sort use karenge jo O(n) hai.

Samajh aise hai ki:
- Pehle count karo ki har element kitni baar aaya (frequency map banao).
- Phir ek "bucket" array banao jismein index = frequency ho.
  - Bucket[3] mein wo saare elements honge jo exactly 3 baar aaye hain.
- Bucket array ko reverse order mein traverse karo (highest frequency se start karo).
- Jab tak k elements nahi mil jaate, unhe result mein add karte jao.

Steps:
1. Frequency Map banao: Har number ki count nikalo.
2. Bucket Array banao: Size = nums.length + 1 (kyunki max frequency nums.length ho sakti hai).
   - Bucket[i] mein wo numbers store karo jo i frequency ke hain.
3. Bucket ko reverse order mein traverse karo (se highest se lowest).
4. Jab tak result mein k elements nahi aa jaate, add karte raho.

Example: nums = [1,1,1,2,2,3], k = 2
- Frequency Map: {1: 3, 2: 2, 3: 1}
- Bucket: [ [], [], [2], [1], [], [], [] ]
  - Index 0: empty
  - Index 1: [3] (3 ek baar aaya)
  - Index 2: [2] (2 do baar aaya)
  - Index 3: [1] (1 teen baar aaya)
- Reverse traverse: Index 3 -> [1], Index 2 -> [2]
- Result: [1, 2] (k=2 elements mil gaye)

Time Complexity: O(n) - ek baar frequency count, ek baar bucket traverse
Space Complexity: O(n) - frequency map aur bucket array ke liye
==========================================================================
*/

function topKFrequent(nums, k) {
    const n = nums.length;
    
    // Step 1: Frequency Map banao
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Bucket array banao - index = frequency
    const buckets = new Array(n + 1).fill(null).map(() => []);
    
    for (const [num, freq] of freqMap) {
        buckets[freq].push(num);
    }

    // Step 3: Reverse order mein traverse karo aur k elements collect karo
    const result = [];
    for (let i = n; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;
}

module.exports = topKFrequent;

// ============ TEST CASES ============

console.log("Test 1: Basic case");
console.log("Input: nums = [1,1,1,2,2,3], k = 2");
console.log("Expected: [1, 2]");
console.log("Output:  ", topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log("---");

console.log("Test 2: Single element");
console.log("Input: nums = [1], k = 1");
console.log("Expected: [1]");
console.log("Output:  ", topKFrequent([1], 1));
console.log("---");

console.log("Test 3: Multiple same frequency");
console.log("Input: nums = [1,2,1,2,1,2,3,3], k = 2");
console.log("Expected: [1, 2] or [2, 1]");
console.log("Output:  ", topKFrequent([1, 2, 1, 2, 1, 2, 3, 3], 2));
console.log("---");

console.log("Test 4: Negative numbers");
console.log("Input: nums = [-1,-1,2,2,2,3], k = 2");
console.log("Expected: [2, -1] or [2, 3]");
console.log("Output:  ", topKFrequent([-1, -1, 2, 2, 2, 3], 2));
console.log("---");

console.log("Test 5: All unique elements");
console.log("Input: nums = [1,2,3,4,5], k = 3");
console.log("Expected: Any 3 elements from [1,2,3,4,5]");
console.log("Output:  ", topKFrequent([1, 2, 3, 4, 5], 3));
console.log("---");
