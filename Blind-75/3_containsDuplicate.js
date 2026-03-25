/**
 * ============================================================================
 * PROBLEM: Contains Duplicate
 * ============================================================================
 * Given an integer array nums, return true if any value appears at least 
 * twice in the array, and return false if every element is distinct.
 * 
 * ============================================================================
 * APPROACH: Hash Set
 * ============================================================================
 * Logic:
 * 1. Use a Set to store seen numbers
 * 2. For each number, check if it already exists in Set
 * 3. If yes, duplicate found → return true
 * 4. If no, add number to Set
 * 5. If loop completes without finding duplicate, return false
 * 
 * Why Set works:
 * - Set only stores unique values
 * - O(1) average lookup time
 * - As soon as we find a duplicate, we can return
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through array
 * - Set operations are O(1) on average
 * 
 * SPACE COMPLEXITY: O(n)
 * - In worst case (no duplicates), we store all n elements
 * ============================================================================
 */

function containsDuplicate(nums) {
  // Set stores unique values
  const set = new Set();

  // Traverse array
  for (let num of nums) {

    // If number already exists → duplicate
    if (set.has(num)) return true;

    // Add number to set
    set.add(num);
  }

  // No duplicates found
  return false;
}

// Test
console.log(containsDuplicate([1,2,3,1])); // true
