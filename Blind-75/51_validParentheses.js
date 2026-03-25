/**
 * ============================================================================
 * PROBLEM: Valid Parentheses
 * ============================================================================
 * Given a string containing just '(', ')', '{', '}', '[', ']', determine
 * if the string is valid. Valid means:
 * 1. Open brackets must be closed by same type
 * 2. Open brackets must be closed in correct order
 * 
 * ============================================================================
 * APPROACH: Stack
 * ============================================================================
 * Logic:
 * 1. Use stack to store opening brackets
 * 2. For opening bracket: push to stack
 * 3. For closing bracket: check if stack top matches
 * 4. At end, stack should be empty
 * 
 * Why Stack?
 * - Last In, First Out (LIFO) matches bracket matching
 * - Most recent opening bracket must be closed first
 * 
 * Example: "()[]{}"
 * - '(': push → stack = ['(']
 * - ')': pop '(' matches → stack = []
 * - '[': push → stack = ['[']
 * - ']': pop '[' matches → stack = []
 * - '{': push → stack = ['{']
 * - '}': pop '{' matches → stack = []
 * - Stack empty → valid
 * 
 * Example: "(]"
 * - '(': push → stack = ['(']
 * - ']': top is '(' but expected '[' → invalid
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through string
 * - Each character pushed/popped at most once
 * 
 * SPACE COMPLEXITY: O(n)
 * - Worst case: all opening brackets, stack size = n
 * ============================================================================
 */

// 📚 BATCH 11 – STACKS

function isValid(s) {
  // Stack to store opening brackets
  const stack = [];

  // Mapping of closing -> opening brackets
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  // Traverse string
  for (let ch of s) {
    // If opening bracket, push to stack
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else {
      // Closing bracket: stack must not be empty
      if (stack.length === 0) return false;

      // Top of stack must match corresponding opening
      const top = stack.pop();
      if (top !== map[ch]) return false;
    }
  }

  // Stack should be empty at end
  return stack.length === 0;
}

// Test
console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false
