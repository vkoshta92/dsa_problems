/**
 * ============================================================================
 * PROBLEM: Two Sum
 * ============================================================================
 * Given an array of integers nums and an integer target, return indices of the 
 * two numbers such that they add up to target.
 * 
 * ============================================================================
 * APPROACH: Hash Map (One Pass)
 * ============================================================================
 * Logic:
 * 1. Use a hash map to store each number and its index
 * 2. For each number, calculate the complement (target - current number)
 * 3. If complement exists in map, we found the pair
 * 4. Otherwise, store current number with its index
 * 
 * Why this works:
 * - We only need to find ONE pair that sums to target
 * - Hash map gives O(1) lookup for complement
 * - One pass through array is enough
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through the array
 * - Hash map operations are O(1) on average
 * 
 * SPACE COMPLEXITY: O(n)
 * - In worst case, we store all n elements in the hash map
 * ============================================================================
 */

function twoSum(nums, target) {
  // Map to store number -> index
  const map = new Map();

  // Loop through array
  for (let i = 0; i < nums.length; i++) {

    // Find required number to reach target
    const diff = target - nums[i];

    // If required number already seen, return indices
    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    // Store current number with its index
    map.set(nums[i], i);
  }
}

// Test
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
