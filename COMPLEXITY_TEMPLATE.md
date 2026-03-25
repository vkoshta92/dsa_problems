# Space and Time Complexity Documentation Template

## Standard Format for Adding Complexity Analysis

Use this template to add comprehensive space and time complexity documentation to any code file:

```javascript
/**
 * ============================================================================
 * PROBLEM: [Problem Name]
 * ============================================================================
 * [Brief problem description in your own words]
 * 
 * ============================================================================
 * APPROACH: [Approach Name]
 * ============================================================================
 * Logic:
 * 1. [Step 1 description]
 * 2. [Step 2 description]
 * 3. [Step 3 description]
 * 
 * Why this works:
 * - [Key insight 1]
 * - [Key insight 2]
 * 
 * ============================================================================
 * TIME COMPLEXITY: O([complexity])
 * - [Explanation of time complexity]
 * 
 * SPACE COMPLEXITY: O([complexity])
 * - [Explanation of space complexity]
 * ============================================================================
 */

// Your code here
```

## Examples of Complexity Analysis

### Example 1: Linear Search
```javascript
/**
 * ============================================================================
 * PROBLEM: Linear Search
 * ============================================================================
 * Find the index of a target element in an array.
 * 
 * ============================================================================
 * APPROACH: Brute Force
 * ============================================================================
 * Logic:
 * 1. Iterate through each element of the array
 * 2. Compare each element with the target
 * 3. Return index if found, -1 if not found
 * 
 * Why this works:
 * - Checks every element systematically
 * - Guarantees finding the target if it exists
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - In worst case, we check all n elements
 * - Single loop through the array
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using a constant amount of extra space
 * - No additional data structures used
 * ============================================================================
 */
```

### Example 2: Binary Search
```javascript
/**
 * ============================================================================
 * PROBLEM: Binary Search
 * ============================================================================
 * Find the index of a target element in a sorted array.
 * 
 * ============================================================================
 * APPROACH: Divide and Conquer
 * ============================================================================
 * Logic:
 * 1. Compare target with middle element
 * 2. If equal, return middle index
 * 3. If target is smaller, search left half
 * 4. If target is larger, search right half
 * 5. Repeat until found or search space is empty
 * 
 * Why this works:
 * - Array is sorted, so we can eliminate half the search space each time
 * - Logarithmic reduction in search space
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(log n)
 * - Each step reduces search space by half
 * - Maximum log₂(n) steps needed
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using a few variables to track indices
 * - No recursion or additional data structures
 * ============================================================================
 */
```

## Common Complexity Patterns

### Time Complexities:
- **O(1)**: Constant time - single operation
- **O(log n)**: Logarithmic - binary search, heap operations
- **O(n)**: Linear - single loop through data
- **O(n log n)**: Linearithmic - merge sort, heap sort
- **O(n²)**: Quadratic - nested loops
- **O(2^n)**: Exponential - recursive without memoization
- **O(n!)**: Factorial - permutations

### Space Complexities:
- **O(1)**: Constant space - fixed number of variables
- **O(log n)**: Recursive call stack in divide and conquer
- **O(n)**: Linear space - arrays, hash maps, recursion
- **O(n²)**: 2D arrays, adjacency matrices

## Guidelines for Writing Complexity Analysis

1. **Be Specific**: Explain WHY the complexity is what it is
2. **Consider Best/Worst/Average Cases**: Mention if they differ
3. **Account for All Operations**: Include all significant operations
4. **Explain Space Usage**: Detail what data structures contribute to space
5. **Use Clear Language**: Make it understandable to others
6. **Follow the Template**: Maintain consistency across files

## When to Add Complexity Analysis

Add complexity analysis to:
- Algorithm implementations
- Data structure operations
- Problem-solving code
- Performance-critical functions
- Any non-trivial computational logic

Skip complexity analysis for:
- Simple utility functions with obvious O(1) complexity
- Configuration or setup code
- Purely I/O operations
- Boilerplate code